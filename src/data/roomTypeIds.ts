/**
 * Room slug → Cloudbeds room type ID.
 *
 * The real IDs come from the client's Cloudbeds configuration (pending).
 * Set NEXT_PUBLIC_CLOUDBEDS_ROOM_TYPE_IDS to a JSON object to supply them
 * without code changes, e.g.
 *   NEXT_PUBLIC_CLOUDBEDS_ROOM_TYPE_IDS={"el-royal-suite":"12345","la-luna":"12346"}
 *
 * An empty value means "unknown" and booking CTAs simply omit the room
 * preselection rather than sending a broken hash to the engine.
 */

const PLACEHOLDER_ROOM_TYPE_IDS: Record<string, string> = {
  'el-royal-suite': '',
  'la-biblioteca-suite': '',
  'la-jacaranda': '',
  'la-luna': '',
  'el-cielo': '',
  'el-sol': '',
  'el-amarillo': '',
  'la-escondida': '',
  'la-vista': '',
};

function loadRoomTypeIds(): Record<string, string> {
  const raw = process.env.NEXT_PUBLIC_CLOUDBEDS_ROOM_TYPE_IDS;
  if (!raw) return PLACEHOLDER_ROOM_TYPE_IDS;
  try {
    return { ...PLACEHOLDER_ROOM_TYPE_IDS, ...JSON.parse(raw) };
  } catch {
    console.warn('NEXT_PUBLIC_CLOUDBEDS_ROOM_TYPE_IDS is not valid JSON; using placeholders');
    return PLACEHOLDER_ROOM_TYPE_IDS;
  }
}

const roomTypeIds = loadRoomTypeIds();

/** Returns the Cloudbeds room type ID for a room slug, or undefined if not yet configured. */
export function getRoomTypeId(slug: string): string | undefined {
  return roomTypeIds[slug] || undefined;
}
