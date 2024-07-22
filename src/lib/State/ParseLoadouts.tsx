import { spellByName } from "@/types/Spell"
import { availableEquipment } from "../Equipment"
import { EquipmentPiece } from "@/types/Player"
import { ImportableData } from "@/types/State"

export const parseLoadoutsFromImportedData = (data: ImportableData) =>
  data.loadouts.map((loadout, i) => {
    // For each item, reload the most current data using the item ID to ensure we're not using stale data.
    if (loadout.equipment) {
      for (const [k, v] of Object.entries(loadout.equipment)) {
        if (v === null) continue
        let item: EquipmentPiece | undefined
        if (Object.hasOwn(v, 'id')) {
          item = availableEquipment.find((eq) => eq.id === v.id)
          if (!item)
            console.warn(
              `[parseLoadoutsFromImportedData] No item found for item ID ${v.id}`,
            )
        }
        // The following line will remove the item entirely if it seems to no longer exist.
        loadout.equipment[k as keyof typeof loadout.equipment] = item || null
      }
    }

    // load the current spell, if applicable
    if (loadout.spell?.name) {
      loadout.spell = spellByName(loadout.spell.name)
    }

    return { name: `Loadout ${i + 1}`, ...loadout }
  })

