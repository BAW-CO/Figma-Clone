"use client";

import { LiveMap, LiveList, LiveObject } from "@liveblocks/client";
import { ClientSideSuspense } from "@liveblocks/react";
import Loader from "@/components/Loader";
import { RoomProvider } from "@/liveblocks.config";

const Room = ({ children }: { children: React.ReactNode }) => {
  return (
    <RoomProvider
      id="fig-room"
      initialPresence={{ cursor: null, cursorColor: null, editingText: null }}
      initialStorage={{
        canvasObjects: new LiveMap([
          ["someId", new LiveObject({ type: "object", data: { id: "someId", zIndex: 0 } })],
        ]),
        // layers: new LiveList([
        //   new LiveObject({ type: "layer", data: { id: "layer1", zIndex: 0 } }),
        // ]),
      }}
    >
      <ClientSideSuspense fallback={<Loader />}>
        {() => children}
      </ClientSideSuspense>
    </RoomProvider>
  );
};export default Room;