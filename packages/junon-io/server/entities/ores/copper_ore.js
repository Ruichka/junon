const BaseOre = require("./base_ore")
const Constants = require("./../../../common/constants.json")
const Protocol = require('../../../common/util/protocol')


class CopperOre extends BaseOre {
  getConstantsTable() {
    return "Ores.CopperOre"
  }

  getType() {
    return Protocol.definition().BuildingType.CopperOre
  }
}

module.exports = CopperOre
