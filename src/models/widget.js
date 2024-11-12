import mongoose from "mongoose";

const WidgetSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  isVisible: { type: Boolean, default: true },
  data: { type: [String] },
  createdAt: { type: Date, default: Date.now },
});

const Widget = mongoose.models.Widget || mongoose.model("Widget", WidgetSchema);

export default Widget;
