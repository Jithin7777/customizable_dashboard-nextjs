"use client";

import { useState, useEffect } from "react";
import { useWidgetContext } from "@/context/widgetContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogPortal,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import SkeletonCard from "@/components/SkeletonCard"; 
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const { widgetPreferences = [], toggleWidgetVisibility } = useWidgetContext();
  const [selectedWidget, setSelectedWidget] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [widgetToHide, setWidgetToHide] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // const [selectedWidgets, setSelectedWidgets] = useState([]);
  const { toast } = useToast(); //
  useEffect(() => {
    const fetchWidgets = async () => {
      setTimeout(() => {
        setIsLoading(false); 
      }, 2000);
    };

    fetchWidgets();
  }, []);

  // if (!widgetPreferences || widgetPreferences.length === 0) {
  //   return <div>No widgets available</div>;
  // }

  const handleWidgetSelect = (event) => {
    const selectedWidgetId = event.target.value;
    const selectedWidgetData = widgetPreferences.find(
      (widget) => widget._id === selectedWidgetId
    );
    setSelectedWidget(selectedWidgetData);
  };

  const handleHideButtonClick = (widget) => {
    setWidgetToHide(widget);
    setIsDialogOpen(true);
  };

  const handleHideConfirm = () => {
    if (widgetToHide) {
      toggleWidgetVisibility(widgetToHide._id, false);
      toast({
        description: "Widget successfully hidden!",
      });
    }
    setIsDialogOpen(false);
  };

  const handleHideCancel = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="md:container md:mx-auto">
      <h1 className="text-4xl font-bold text-gray-700 mb-4 text-center">
        Dashboard
      </h1>

      <div className="mb-4 text-center">
        <label
          htmlFor="widgetDropdown"
          className="block text-sm font-medium text-gray-300"
        >
          Select Widget
        </label>
        <select
          id="widgetDropdown"
          className="mt-1 block w-80 text-center mx-auto bg-gray-800 border border-gray-600 text-gray-200 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          onChange={handleWidgetSelect}
        >
          <option value="">-- Select a Widget --</option>
          {widgetPreferences.map((widget) => (
            <option key={widget._id} value={widget._id}>
              {widget.name}
            </option>
          ))}
        </select>
      </div>

      <div className="container ">
        <div className="flex flex-wrap justify-center gap-1 mb-4 ">
          {widgetPreferences.map((widget) => (
            <Button
              key={widget._id}
              className="flex flex-col items-center bg-gray-800 text-white font-bold hover:bg-gray-700 hover:text-gray-100 transition-colors duration-300 rounded-lg p-2"
            >
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={widget.isVisible}
                  onChange={() =>
                    toggleWidgetVisibility(widget._id, !widget.isVisible)
                  }
                  className="form-checkbox text-blue-500 focus:ring-0 focus:ring-offset-0"
                />
                <span className="font-bold">{widget.name}</span>
              </label>
            </Button>
          ))}
        </div>
      </div>

      {selectedWidget && (
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5">
          <Card
            key={selectedWidget._id}
            className="selected-widget-card bg-white border border-gray-300 shadow-2xl rounded-lg transform transition-all duration-300 hover:scale-105"
          >
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-gray-800">
                {selectedWidget.name}
              </CardTitle>
              <CardDescription className="text-sm text-gray-500 mb-2">
                {selectedWidget.type === "text"
                  ? "Detailed Information"
                  : "Statistical Insights"}
              </CardDescription>
            </CardHeader>
            <CardContent className="px-4 py-2">
              {selectedWidget.type === "statistics" ? (
                <img
                  src="/path/to/your/image.png"
                  alt={`${selectedWidget.name} statistics`}
                  className="w-full h-40 object-cover rounded-md mb-3"
                />
              ) : (
                <ul className="space-y-2">
                  {selectedWidget.data.map((item, index) => (
                    <li
                      key={index}
                      className="shadow-lg rounded-lg p-3 border-l-4 border-blue-500 bg-gray-50 text-gray-700 text-base leading-relaxed"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
            <CardFooter className="flex justify-end px-4">
              <Button
                className="px-4 py-2 text-sm font-medium text-red-500 bg-transparent border border-red-500 rounded hover:bg-red-500 hover:text-white transition duration-300"
                onClick={() => handleHideButtonClick(selectedWidget)}
              >
                Hide
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}

      {isLoading ? (
        <div className="grid w-full grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
          {Array(3)
            .fill()
            .map((_, index) => (
              <SkeletonCard key={index} />
            ))}
        </div>
      ) : (
        <div className="grid w-full xs:grid-cols-2 sm:grid-cols-6 lg:grid-cols-4 gap-4 p-5">
          {widgetPreferences.map(
            (widget) =>
              widget.isVisible && (
                <Card
                  key={widget._id}
                  className="selected-widget-card shadow-2xl rounded-lg transform transition-all duration-300 hover:scale-105"
                >
                  <CardHeader>
                    <CardTitle>{widget.name}</CardTitle>
                    <CardDescription>
                      {widget.type === "text" ? "Text Data" : "Statistic Data"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {widget.type === "statistics" ? (
                      <img
                        src="/path/to/your/image.png"
                        alt={`${widget.name} statistics`}
                        className="w-full h-32 object-cover rounded"
                      />
                    ) : (
                      <ul className="space-y-2">
                        {widget.data.slice(0, 2).map((item, index) => (
                          <li
                            key={index}
                            className="shadow-lg rounded-lg p-4 mb-4 border-l-4 border-blue-500 "
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                  <CardFooter>
                    <Button
                      className="px-4 py-2 text-sm font-medium text-red-500 bg-transparent border border-red-500 rounded hover:bg-red-500 hover:text-white transition duration-300"
                      onClick={() => handleHideButtonClick(widget)}
                    >
                      Hide
                    </Button>
                  </CardFooter>
                </Card>
              )
          )}
        </div>
      )}

      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure you want to hide this widget?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action will hide the widget from your dashboard.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={handleHideCancel}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction onClick={handleHideConfirm}>
              Confirm
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Dashboard;
