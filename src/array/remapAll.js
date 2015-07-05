import { remap } from "./remap"
import { dim } from "./dim"
import { over } from "../tensor/over"

export function remapAll(...mapping) {
  return this::dim()::over( this::remap(...mapping) );
}

