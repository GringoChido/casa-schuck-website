import mockData from './mockCloudbeds.json';
import { getRoomTypeId } from './roomTypeIds';

export interface BilingualText {
  en: string;
  es: string;
}

export interface Room {
  id: string;
  /** Resolved from the env-driven map in roomTypeIds.ts; undefined until the client's Cloudbeds config arrives. */
  roomTypeId?: string;
  name: BilingualText;
  tagline: BilingualText;
  description: BilingualText;
  shortDescription: BilingualText;
  maxGuests: number;
  bedType: BilingualText;
  floor: number;
  baseRate: number;
  accessible: boolean;
  hasAC: boolean;
  extraBed: boolean;
  specialNote: BilingualText | null;
  amenities: string[];
  images: string[];
}

/**
 * The ten rooms, with Cloudbeds room type IDs resolved from the env-driven
 * map. The `cloudbedsRoomTypeId` values inside mockCloudbeds.json are fake
 * placeholders (RT_001…) and are deliberately ignored — a wrong ID sent to a
 * live engine is worse than none.
 */
export const rooms: Room[] = (mockData.roomTypes as unknown as Room[]).map((room) => ({
  ...room,
  roomTypeId: getRoomTypeId(room.id),
}));

export function getRoomBySlug(slug: string): Room | undefined {
  return rooms.find((room) => room.id === slug);
}
