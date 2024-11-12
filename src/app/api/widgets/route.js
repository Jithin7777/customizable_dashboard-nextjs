import connectToDB from "@/database";
import Widget from "@/models/widget";

// GET request to retrieve all widgets
export async function GET(req) {
  await connectToDB();
  try {
    const widgets = await Widget.find();
    return new Response(JSON.stringify(widgets), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Error fetching widgets", error }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

// POST request to create a new widget
export async function POST(req) {
  await connectToDB();

  try {
    const { name, type, isVisible, data } = await req.json();
    console.log("Received data:", data);
    if (!name || !type) {
      return new Response(
        JSON.stringify({ message: "Name and type are required" }),
        { status: 400 }
      );
    }

    const newWidget = new Widget({ name, type, isVisible, data });
    await newWidget.save();

    return new Response(JSON.stringify(newWidget.toObject()), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Error creating widget", error }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

// PUT request to update widget visibility
export async function PUT(req) {
  await connectToDB();
  try {
    const { widgetId, isVisible } = await req.json();

    const widget = await Widget.findByIdAndUpdate(
      widgetId,
      { isVisible },
      { new: true }
    );

    if (!widget) {
      return new Response(JSON.stringify({ message: "Widget not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify(widget), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Error updating widget visibility", error }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
