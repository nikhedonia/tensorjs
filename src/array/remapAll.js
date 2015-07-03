import { remap } from "./remap"
import { dim } from "./dim"
import { loop } from "../einstein/loop"

export function remapAll(...mapping) {
  const dims = this::dim();
  return this::remap(...mapping)::loop(...dims);
}

