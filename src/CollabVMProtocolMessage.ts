import { CollabVMRectMessage } from "./CollabVMRectMessage.js";

export interface CollabVMProtocolMessage {
    type: CollabVMProtocolMessageType;
    rect?: CollabVMRectMessage | undefined;
    opusPacket?: Buffer | Uint8Array | undefined; // Opus audio packet
}

export enum CollabVMProtocolMessageType {
    // JPEG Dirty Rectangle
    rect = 0,
    audioOpus = 1 // Opus audio message type
}