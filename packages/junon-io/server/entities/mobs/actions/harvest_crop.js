const SeekAction = require("./seek_action")
const Protocol = require('../../../../common/util/protocol')

class HarvestCrop extends SeekAction {

  perform(options) {
    let goal = this.planner.entity.addGoalTarget(options.targetEntity)
    this.handleGoal(goal)

    if (goal) {
      options.targetEntity.claim(this.planner.entity)
    }
  }

  getBehaviorName() {
    return "HarvestCrop"
  }

}

module.exports = HarvestCrop