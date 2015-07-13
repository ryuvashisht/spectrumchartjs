(function () {
    'use strict';

    angular.module('app', ['appatronic.chartjs']);

    angular.module('app').controller('AppCtrl', ['$scope', AppCtrl]);

    function AppCtrl($scope) {
        $scope.chartOptions = {

            // Sets the chart to be responsive
            responsive: true,

            ///Boolean - Whether grid lines are shown across the chart
            scaleShowGridLines: true,

            //String - Colour of the grid lines
            scaleGridLineColor: "rgba(0,0,0,.05)",

            //Number - Width of the grid lines
            scaleGridLineWidth: 1,

            //Boolean - Whether the line is curved between points
            bezierCurve: true,

            //Number - Tension of the bezier curve between points
            bezierCurveTension: 0.4,

            //Boolean - Whether to show a dot for each point
            pointDot: true,

            //Number - Radius of each point dot in pixels
            pointDotRadius: 4,

            //Number - Pixel width of point dot stroke
            pointDotStrokeWidth: 1,

            //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
            pointHitDetectionRadius: 20,

            //Boolean - Whether to show a stroke for datasets
            datasetStroke: true,

            //Number - Pixel width of dataset stroke
            datasetStrokeWidth: 2,

            //Boolean - Whether to fill the dataset with a colour
            datasetFill: true,

            // Function - on animation progress
            onAnimationProgress: function () {},

            // Function - on animation complete
            onAnimationComplete: function () {},

            scaleLabel: "$<%=value%>",

            yAxisLabel: "Y Axis Label"

            //String - A legend template

        };
        $scope.chartData = {
            labels: ['', 'On Premise Sale', '', '', '', '', ''],
            datasets: [{
                label: "My First dataset",
                //new option, type will default to bar as that what is used to create the scale
                type: "bar",
                fillColor: "rgba(220,20,220,0.2)",
                strokeColor: "rgba(220,20,220,1)",
                pointColor: "rgba(220,20,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [0, 2000, 0, 0, 0, 0, 0]
    }]
        };

        $scope.chartType = "bar";
    }

})();