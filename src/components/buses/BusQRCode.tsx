
import React from "react";
import { QrCode } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IBus } from "@/types";

interface BusQRCodeProps {
  bus: IBus;
}

const BusQRCode: React.FC<BusQRCodeProps> = ({ bus }) => {
  // Generate a QR code that contains bus details
  const qrValue = JSON.stringify({
    id: bus._id,
    name: bus.name,
    capacity: bus.capacity,
    route: {
      start: bus.route.start,
      end: bus.route.end
    }
  });

  // In a real app, we'd use a proper QR code library
  // For this demo, we'll simulate a QR code with a placeholder
  return (
    <Card className="overflow-hidden border-transit-orange/20">
      <CardHeader className="bg-transit-orange/10 pb-2">
        <CardTitle className="text-sm font-medium flex items-center">
          <QrCode className="h-4 w-4 mr-2 text-transit-orange" />
          Bus Verification QR Code
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 flex flex-col items-center">
        <div className="w-32 h-32 bg-white flex items-center justify-center p-2 rounded-lg">
          <div className="grid grid-cols-5 grid-rows-5 gap-1 w-full h-full">
            {/* Simple QR code pattern simulation */}
            {Array.from({ length: 25 }).map((_, i) => (
              <div 
                key={i} 
                className={`
                  ${Math.random() > 0.6 ? "bg-black" : "bg-transparent"} 
                  ${(i < 5 || i >= 20 || i % 5 === 0 || i % 5 === 4) ? "bg-black" : ""}
                `}
              ></div>
            ))}
          </div>
        </div>
        <div className="text-xs text-center mt-2 text-muted-foreground">
          Bus {bus.name} • Route: {bus.route.start}-{bus.route.end}
        </div>
      </CardContent>
    </Card>
  );
};

export default BusQRCode;
