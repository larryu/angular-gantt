(function(){
    'use strict';
    angular.module('gantt').factory('GanttSide', [function() {
        var Side= function(gantt) {
            this.gantt = gantt;
        };
        Side.prototype.getWidth = function() {
            return this.gantt.options.value('showSide') ? this.gantt.options.value('sideWidth') : 0;
        };
        Side.prototype.show = function(value) {
            this.$element.toggleClass('ng-hide', !value);
        };

        return Side;
    }]);
}());
