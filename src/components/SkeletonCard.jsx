import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "./ui/skeleton";

const SkeletonCard = () => {
  return (
    <div className=" flex justify-center w-full">
      <Card className=" mt-5 ">
        <CardHeader className=" ">
          <Skeleton className="w-15 h-8  pt-3" />
          <Skeleton className="h-6 flex-grow" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-4 flex-grow mt-2" />
          <Skeleton className="h-4 flex-grow mt-4" />
          <Skeleton className="h-4 w-72 mt-4" />
        </CardContent>
        <CardFooter>
          <Skeleton className="h-10 w-20" />
        </CardFooter>
      </Card>
    </div>
  );
};

export default SkeletonCard;
