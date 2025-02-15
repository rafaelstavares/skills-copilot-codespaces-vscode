function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'modules/skills/views/member.html',
    controller: 'SkillsController',
    controllerAs: 'vm',
    scope: {
      member: 'm'
    }
    };
}