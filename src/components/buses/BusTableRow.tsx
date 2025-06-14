import React from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Edit, Trash, Route, QrCode } from "lucide-react";
import { IBus } from "@/types";
import { getRouteDisplay } from "@/utils/typeGuards";
import { IRoute } from "@/types";

interface BusTableRowProps {
  bus: import("@/types").IBus;
  isAdmin: boolean;
  onEdit: (bus: import("@/types").IBus) => void;
  onDelete: (id: string) => void;
  onGenerateQR: (bus: import("@/types").IBus) => void;
  route?: IRoute;
  fare?: number;
  stationName?: string;
}

const BusTableRow: React.FC<BusTableRowProps> = ({
  bus,
  isAdmin,
  onEdit,
  onDelete,
  onGenerateQR,
  route,
  fare,
  stationName
}) => {
  return (
    <TableRow className="hover:bg-transit-orange/5">
      <TableCell className="font-medium text-white">{bus.name}</TableCell>
      <TableCell>
        <div className="flex items-center">
          <Route className="h-4 w-4 mr-1 text-transit-orange" />
          <span>{route ? `${route.start} - ${route.end}` : "—"}</span>
        </div>
      </TableCell>
      <TableCell>
        <Badge variant="outline" className="bg-accent/20 text-primary-foreground border-transit-orange/20">
          {bus.capacity} seats
        </Badge>
      </TableCell>
      <TableCell>
        {fare !== undefined ? (
          <span className="font-semibold text-primary">{fare}</span>
        ) : (
          <span>—</span>
        )}
      </TableCell>
      <TableCell>
        {stationName ? (
          <span className="font-semibold">{stationName}</span>
        ) : (
          <span>—</span>
        )}
      </TableCell>
      <TableCell>
        <div className="flex gap-2">
          <Button 
            size="sm" 
            variant="outline" 
            className="h-8 p-2 text-transit-orange border-transit-orange/20 hover:bg-transit-orange/10" 
            onClick={() => onGenerateQR(bus)}
          >
            <QrCode className="h-4 w-4 mr-1" /> QR
          </Button>
          
          {isAdmin && (
            <>
              <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-transit-orange" onClick={() => onEdit(bus)}>
                <Edit className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-destructive" onClick={() => onDelete(bus._id)}>
                <Trash className="h-4 w-4" />
              </Button>
            </>
          )}
        </div>
      </TableCell>
    </TableRow>
  );
};

export default BusTableRow;
