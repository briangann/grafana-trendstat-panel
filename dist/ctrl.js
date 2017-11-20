'use strict';

System.register(['app/plugins/sdk', 'lodash', 'jquery', 'app/core/utils/kbn', 'app/core/config', 'app/core/time_series2', './libs/angular-aria/angular-aria.min.js', './libs/angular-animate/angular-animate.min.js', './libs/angular-material/angular-material.min.js', './libs/angular-material/angular-material.min.css!', './css/font-awesome.min.css!', './css/panel.css!', './icons'], function (_export, _context) {
  "use strict";

  var MetricsPanelCtrl, _, $, kbn, config, TimeSeries, ICONS_TREND_UP, ICONS_TREND_DOWN, ICONS_TREND_NONE, _createClass, panelDefaults, TrendStatPanelCtrl;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  function getColorForValue(data, value) {
    for (var i = data.thresholds.length; i > 0; i--) {
      if (value >= data.thresholds[i - 1]) {
        return data.colorMap[i];
      }
    }
    return _.first(data.colorMap);
  }

  return {
    setters: [function (_appPluginsSdk) {
      MetricsPanelCtrl = _appPluginsSdk.MetricsPanelCtrl;
    }, function (_lodash) {
      _ = _lodash.default;
    }, function (_jquery) {
      $ = _jquery.default;
    }, function (_appCoreUtilsKbn) {
      kbn = _appCoreUtilsKbn.default;
    }, function (_appCoreConfig) {
      config = _appCoreConfig.default;
    }, function (_appCoreTime_series) {
      TimeSeries = _appCoreTime_series.default;
    }, function (_libsAngularAriaAngularAriaMinJs) {}, function (_libsAngularAnimateAngularAnimateMinJs) {}, function (_libsAngularMaterialAngularMaterialMinJs) {}, function (_libsAngularMaterialAngularMaterialMinCss) {}, function (_cssFontAwesomeMinCss) {}, function (_cssPanelCss) {}, function (_icons) {
      ICONS_TREND_UP = _icons.ICONS_TREND_UP;
      ICONS_TREND_DOWN = _icons.ICONS_TREND_DOWN;
      ICONS_TREND_NONE = _icons.ICONS_TREND_NONE;
    }],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      panelDefaults = {
        unitFormats: kbn.getUnitFormats(),
        trendstat: {
          colors: ["rgba(245, 54, 54, 0.9)", "rgba(237, 129, 40, 0.89)", "rgba(50, 172, 45, 0.97)"],
          colorBackground: false,
          colorIcon: false,
          colorValue: false,
          leftSideSubtext: 'Updated:',
          leftSideShowSubtext: true,
          leftSideSubtextFontSize: '100%',
          leftSideSubtextFontType: 'default',
          leftSideShowTimestamp: true,
          rightSideShowSubtext: true,
          rightSideSubTextFontSize: '100%',
          rightSideShowTimestamp: true,
          rightSideValueFontType: '',
          rightSideValueFontSize: '120%',
          rightSidePrefix: '',
          rightSidePrefixFontSize: '120%',
          rightSidePostfix: '',
          rightSidePostfixFontSize: '120%',
          rightSideDecimals: 2,
          trendMethod: 'AVG',
          thresholds: '',
          splitDisplay: true,
          showDivider: true,
          dividerColor: 'rgb(109, 109, 109)',
          splitLeftPercent: 60,
          splitRightPercent: 40,
          trendIcon: 'fa-fw',
          trendIconUp: 'fa-arrow-circle-up',
          trendIconDown: 'fa-arrow-circle-down',
          trendIconNone: 'fa-fw',
          trendIconFontSize: '160%',
          trendIconColor: 'rgb(255,255,255)',
          trendUpFontSize: '160%',
          trendDownFontSize: '160%',
          trendNoneFontSize: '160%',
          trendUpFillColor: 'rgba(245, 54, 54, 0.9)',
          trendDownFillColor: 'rgba(50, 172, 45, 0.97)',
          trendNoneFillColor: 'rgb(0,0,0)'
        },
        links: [],
        datasource: null,
        maxDataPoints: 100,
        interval: null,
        targets: [{}],
        cacheTimeout: null,
        format: 'none',
        valueFontSize: '70%',
        valueFontType: 'default',
        valueFooterFontSize: 12,
        valueFooterFontType: 'default',
        prefix: '',
        prefixFontSize: '60%',
        postfix: '',
        postfixFontSize: '60%',
        nullText: null,
        decimals: 2, // decimal precision
        valueMaps: [{
          value: 'null',
          op: '=',
          text: 'N/A'
        }],
        mappingTypes: [{
          name: 'value to text',
          value: 1
        }, {
          name: 'range to text',
          value: 2
        }],
        rangeMaps: [{
          from: 'null',
          to: 'null',
          text: 'N/A'
        }],
        mappingType: 1,
        nullPointMode: 'connected',
        valueName: 'avg',
        thresholds: '',
        colorBackground: false,
        colorValue: false,
        colors: ["rgba(245, 54, 54, 0.9)", "rgba(237, 129, 40, 0.89)", "rgba(50, 172, 45, 0.97)"],
        sparkline: {
          show: false,
          full: false,
          lineColor: 'rgb(31, 120, 193)',
          fillColor: 'rgba(31, 118, 189, 0.18)'
        },
        gauge: {
          show: false,
          minValue: 0,
          maxValue: 100,
          thresholdMarkers: true,
          thresholdLabels: false
        }
      };

      _export('TrendStatPanelCtrl', TrendStatPanelCtrl = function (_MetricsPanelCtrl) {
        _inherits(TrendStatPanelCtrl, _MetricsPanelCtrl);

        function TrendStatPanelCtrl($scope, $injector, $http, $location) {
          _classCallCheck(this, TrendStatPanelCtrl);

          var _this = _possibleConstructorReturn(this, (TrendStatPanelCtrl.__proto__ || Object.getPrototypeOf(TrendStatPanelCtrl)).call(this, $scope, $injector));

          _.defaults(_this.panel, panelDefaults);
          _this.http = $http;
          _this.valueNameOptions = ['min', 'max', 'avg', 'current', 'total', 'name', 'first', 'delta', 'range'];
          _this.panel.currentValueFormatted = "";
          _this.fontSizesPx = ['4px', '5px', '6px', '7px', '8px', '9px', '10px', '11px', '12px', '13px', '14px', '15px', '16px', '17px', '18px', '19px', '20px', '22px', '24px', '26px', '28px', '30px', '32px', '34px', '36px', '38px', '40px', '42px', '44px', '46px', '48px', '50px', '52px', '54px', '56px', '58px', '60px', '62px', '64px', '66px', '68px', '70px'];
          _this.fontSizesPct = ['5%', '10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%', '110%', '120%', '130%', '140%', '150%', '160%', '170%', '180%', '190%', '200%', '210%', '220%', '230%', '240%', '250%', '260%', '270%', '280%', '290%', '300%', '310%', '320%', '330%', '340%', '350%', '360%', '370%', '380%', '390%', '400%', '410%', '420%', '430%', '440%', '450%', '460%', '470%', '480%', '490%', '500%'];
          _this.fontTypes = ['default', 'Arial', 'Avant Garde', 'Bookman', 'Consolas', 'Courier', 'Courier New', 'Garamond', 'Helvetica', 'Helvetica Neue', 'Open Sans', 'Palatino', 'sans-serif', 'Times', 'Times New Roman', 'Verdana'];
          /*
          this.panel.trendstat.rightSideValueFontType = this.fontTypes[7];
          this.panel.valueFontSize = this.fontSizesPct[7];
          this.panel.prefixFontSize = this.fontSizesPct[5];
          this.panel.postfixFontSize = this.fontSizesPct[5];
          this.panel.trendstat.leftSideSubtextFontSize = this.fontSizesPct[5];
          this.panel.trendstat.rightSideSubtextFontSize = this.fontSizesPct[5];
          this.panel.trendstat.rightSidePrefixFontSize = this.fontSizesPct[5];
          this.panel.trendstat.rightSidePostfixFontSize = this.fontSizesPct[5];
          this.panel.trendstat.rightSideValueFontSize = this.fontSizesPct[9];
          */
          _this.trendMethods = ['AVG'];
          _this.panel.trendstat.trendMethod = _this.trendMethods[0];
          _this.trendStatIconsUp = ICONS_TREND_UP;
          _this.trendStatIconsDown = ICONS_TREND_DOWN;
          _this.trendStatIconsNone = ICONS_TREND_NONE;
          _this.events.on('data-received', _this.onDataReceived.bind(_this));
          _this.events.on('data-error', _this.onDataError.bind(_this));
          _this.events.on('data-snapshot-load', _this.onDataReceived.bind(_this));
          _this.events.on('init-edit-mode', _this.onInitEditMode.bind(_this));
          return _this;
        }

        // setup the editor


        _createClass(TrendStatPanelCtrl, [{
          key: 'onInitEditMode',
          value: function onInitEditMode() {
            // determine the path to this plugin
            var panels = grafanaBootData.settings.panels;
            var thisPanel = panels[this.pluginId];
            var thisPanelPath = thisPanel.baseUrl + '/';
            // add the relative path to the partial
            var optionsPath = thisPanelPath + 'partials/editor.options.html';
            this.addEditorTab('Options', optionsPath, 2);
            var trendOptionsPath = thisPanelPath + 'partials/editor.trendoptions.html';
            this.addEditorTab('Trend Options', trendOptionsPath, 3);
            var mappingsPath = thisPanelPath + 'partials/editor.mappings.html';
            this.addEditorTab('Value Mappings', mappingsPath, 4);
            this.unitFormats = kbn.getUnitFormats();
          }
        }, {
          key: 'removeValueMap',
          value: function removeValueMap(map) {
            var index = _.indexOf(this.panel.valueMaps, map);
            this.panel.valueMaps.splice(index, 1);
            this.render();
          }
        }, {
          key: 'addValueMap',
          value: function addValueMap() {
            this.panel.valueMaps.push({
              value: '',
              op: '=',
              text: ''
            });
          }
        }, {
          key: 'removeRangeMap',
          value: function removeRangeMap(rangeMap) {
            var index = _.indexOf(this.panel.rangeMaps, rangeMap);
            this.panel.rangeMaps.splice(index, 1);
            this.render();
          }
        }, {
          key: 'addRangeMap',
          value: function addRangeMap() {
            this.panel.rangeMaps.push({
              from: '',
              to: '',
              text: ''
            });
          }
        }, {
          key: 'getDecimalsForValue',
          value: function getDecimalsForValue(value) {
            if (_.isNumber(this.panel.decimals)) {
              return {
                decimals: this.panel.decimals,
                scaledDecimals: null
              };
            }

            var delta = value / 2;
            var dec = -Math.floor(Math.log(delta) / Math.LN10);

            var magn = Math.pow(10, -dec),
                norm = delta / magn,
                // norm is between 1.0 and 10.0
            size;

            if (norm < 1.5) {
              size = 1;
            } else if (norm < 3) {
              size = 2;
              // special case for 2.5, requires an extra decimal
              if (norm > 2.25) {
                size = 2.5;
                ++dec;
              }
            } else if (norm < 7.5) {
              size = 5;
            } else {
              size = 10;
            }

            size *= magn;

            // reduce starting decimals if not needed
            if (Math.floor(value) === value) {
              dec = 0;
            }

            var result = {};
            result.decimals = Math.max(0, dec);
            result.scaledDecimals = result.decimals - Math.floor(Math.log(size) / Math.LN10) + 2;
            return result;
          }
        }, {
          key: 'setValues',
          value: function setValues(data) {
            data.flotpairs = [];

            if (this.series.length > 1) {
              var error = new Error();
              error.message = 'Multiple Series Error';
              error.data = 'Metric query returns ' + this.series.length + ' series. TrendStat Panel expects a single series.\n\nResponse:\n' + JSON.stringify(this.series);
              throw error;
            }
            if (this.series && this.series.length > 0) {
              var lastPoint = _.last(this.series[0].datapoints);
              var lastValue = _.isArray(lastPoint) ? lastPoint[0] : null;

              if (this.panel.valueName === 'name') {
                data.value = 0;
                data.valueRounded = 0;
                data.valueFormated = this.series[0].alias;
              } else if (_.isString(lastValue)) {
                data.value = 0;
                data.valueFormated = _.escape(lastValue);
                data.valueRounded = 0;
              } else {
                // TODO: avg etc
                //data.value = this.series[0].stats[this.panel.valueName];
                data.value = this.series[0].stats.current;
                data.flotpairs = this.series[0].flotpairs;

                var decimalInfo = this.getDecimalsForValue(data.value);
                var formatFunc = kbn.valueFormats[this.panel.format];
                data.valueFormated = formatFunc(data.value, decimalInfo.decimals, decimalInfo.scaledDecimals);
                data.valueRounded = kbn.roundValue(data.value, decimalInfo.decimals);
              }
              //data.trendAvgValue = ctrl.series[0].stats.avg;
              var previousIndex = this.series[0].datapoints.length - 2;
              data.previousValue = this.series[0].datapoints[previousIndex][0];
              var prevDecimalInfo = this.getDecimalsForValue(data.previousValue);
              var prevFormatFunc = kbn.valueFormats[this.panel.format];
              data.previousValueFormatted = prevFormatFunc(data.previousValue, prevDecimalInfo.decimals, prevDecimalInfo.scaledDecimals);
              data.previousValueRounded = kbn.roundValue(data.previousValue, prevDecimalInfo.decimals);

              // calculate change by percentile
              data.trendPercentage = (data.value - data.previousValue) / data.previousValue * 100;
              data.trendPercentage = kbn.roundValue(data.trendPercentage, prevDecimalInfo.decimals);
              //debugger;
              var xstats = this.series[0].stats;
              data.trendAvgValue = this.series[0].stats.avg;
              data.trendAvgValueFormatted = prevFormatFunc(data.trendAvgValue, prevDecimalInfo.decimals, prevDecimalInfo.scaledDecimals);

              data.trendAvgPercentage = (data.value - data.trendAvgValue) / data.trendAvgValue * 100;
              data.trendAvgPercentage = kbn.roundValue(data.trendAvgPercentage, prevDecimalInfo.decimals);
              data.trendTimeStep = this.series[0].stats.timeStep;

              // for previous value trend
              //data.trendIcon = this.getTrendIcon(data.previousValue, data.value);
              // for avg value trend
              data.trendIcon = this.getTrendIcon(data.trendAvgValue, data.value);
              data.trendIconFontSize = this.getTrendIconFontSize(data.trendAvgValue, data.value);
              data.trendIconColor = this.getTrendIconColor(data.trendAvgValue, data.value);

              // Add $__name variable for using in prefix or postfix
              data.scopedVars = _.extend({}, this.panel.scopedVars);
              data.scopedVars.__name = { value: this.series[0].label };
            }

            // check value to text mappings if its enabled
            if (this.panel.mappingType === 1) {
              for (var i = 0; i < this.panel.valueMaps.length; i++) {
                var map = this.panel.valueMaps[i];
                // special null case
                if (map.value === 'null') {
                  if (data.value === null || data.value === void 0) {
                    data.valueFormated = map.text;
                    return;
                  }
                  continue;
                }

                // value/number to text mapping
                var value = parseFloat(map.value);
                if (value === data.valueRounded) {
                  data.valueFormated = map.text;
                  return;
                }
              }
            } else if (this.panel.mappingType === 2) {
              for (var _i = 0; _i < this.panel.rangeMaps.length; _i++) {
                var _map = this.panel.rangeMaps[_i];
                // special null case
                if (_map.from === 'null' && _map.to === 'null') {
                  if (data.value === null || data.value === void 0) {
                    data.valueFormated = _map.text;
                    return;
                  }
                  continue;
                }

                // value/number to range mapping
                var from = parseFloat(_map.from);
                var to = parseFloat(_map.to);
                if (to >= data.valueRounded && from <= data.valueRounded) {
                  data.valueFormated = _map.text;
                  return;
                }
              }
            }

            if (data.value === null || data.value === void 0) {
              data.valueFormated = "no value";
            }
          }
        }, {
          key: 'getValueText',
          value: function getValueText() {
            return this.data.valueFormatted;
          }
        }, {
          key: 'setUnitFormat',
          value: function setUnitFormat(subItem) {
            this.panel.format = subItem.value;
            this.render();
          }
        }, {
          key: 'onDataError',
          value: function onDataError(err) {
            this.onDataReceived([]);
          }
        }, {
          key: 'getCurrentTime',
          value: function getCurrentTime() {
            var d = new Date();
            return d.toISOString();
          }
        }, {
          key: 'onDataReceived',
          value: function onDataReceived(dataList) {
            // these can differ given the options, but for now set them to the same time
            //
            this.panel.trendstat.leftSideTimestamp = this.getCurrentTime();
            this.panel.trendstat.rightSideTimestamp = this.panel.trendstat.leftSideTimestamp;

            this.series = dataList.map(this.seriesHandler.bind(this));
            var data = {};
            this.setValues(data);
            this.data = data;
            //console.log("Data value: " + data.value + " formatted: " + data.valueFormatted + " rounded: " + data.valueRounded);
            // var fmtTxt = kbn.valueFormats[this.panel.format];
            // console.log("Format: " + fmtTxt);
            //this.gaugeObject.updateGauge(data.value, data.valueFormatted, data.valueRounded);
            this.render();
          }
        }, {
          key: 'seriesHandler',
          value: function seriesHandler(seriesData) {
            var series = new TimeSeries({
              datapoints: seriesData.datapoints,
              alias: seriesData.target
            });
            series.flotpairs = series.getFlotPairs(this.panel.nullPointMode);
            return series;
          }
        }, {
          key: 'setColoring',
          value: function setColoring(options) {
            if (options.background) {
              this.panel.colorValue = false;
              this.panel.colors = ['rgba(71, 212, 59, 0.4)', 'rgba(245, 150, 40, 0.73)', 'rgba(225, 40, 40, 0.59)'];
            } else {
              this.panel.colorBackground = false;
              this.panel.colors = ['rgba(50, 172, 45, 0.97)', 'rgba(237, 129, 40, 0.89)', 'rgba(245, 54, 54, 0.9)'];
            }
            this.render();
          }
        }, {
          key: 'invertColorOrder',
          value: function invertColorOrder() {
            var tmp = this.panel.colors[0];
            this.panel.colors[0] = this.panel.colors[2];
            this.panel.colors[2] = tmp;
            this.render();
          }
        }, {
          key: 'onColorChange',
          value: function onColorChange(panelColorIndex) {
            var _this2 = this;

            return function (color) {
              _this2.panel.colors[panelColorIndex] = color;
              _this2.render();
            };
          }
        }, {
          key: 'onSparklineColorChange',
          value: function onSparklineColorChange(newColor) {
            this.panel.sparkline.lineColor = newColor;
            this.render();
          }
        }, {
          key: 'onSparklineFillChange',
          value: function onSparklineFillChange(newColor) {
            this.panel.sparkline.fillColor = newColor;
            this.render();
          }
        }, {
          key: 'invertTrendColorOrder',
          value: function invertTrendColorOrder() {
            var tmp = this.panel.trendstat.colors[0];
            this.panel.trendstat.colors[0] = this.panel.trendstat.colors[2];
            this.panel.trendstat.colors[2] = tmp;
            this.render();
          }
        }, {
          key: 'getTrendIcon',
          value: function getTrendIcon(historicalValue, currentValue) {
            var icon = "fa fa-square";
            if (currentValue > historicalValue) {
              icon = "fa " + this.panel.trendstat.trendIconUp;
            }
            if (currentValue < historicalValue) {
              icon = "fa " + this.panel.trendstat.trendIconDown;
            }
            if (currentValue === historicalValue) {
              icon = "fa " + this.panel.trendstat.trendIconNone;
            }
            return icon;
          }
        }, {
          key: 'getTrendIconFontSize',
          value: function getTrendIconFontSize(historicalValue, currentValue) {
            var fontSize = this.panel.trendstat.trendNoneFontSize;
            if (currentValue > historicalValue) {
              fontSize = this.panel.trendstat.trendUpFontSize;
            }
            if (currentValue < historicalValue) {
              fontSize = this.panel.trendstat.trendDownFontSize;
            }
            if (currentValue === historicalValue) {
              fontSize = this.panel.trendstat.trendNoneFontSize;
            }
            return fontSize;
          }
        }, {
          key: 'getTrendIconColor',
          value: function getTrendIconColor(historicalValue, currentValue) {
            var color = "rgb(255,255,255)";
            if (currentValue > historicalValue) {
              color = this.panel.trendstat.trendUpFillColor;
            }
            if (currentValue < historicalValue) {
              color = this.panel.trendstat.trendDownFillColor;
            }
            if (currentValue === historicalValue) {
              color = this.panel.trendstat.trendNoneFillColor;
            }
            return color;
          }
        }, {
          key: 'updateLeftSplitPercentage',
          value: function updateLeftSplitPercentage() {
            // make sure it is a number
            if (isNaN(this.panel.trendstat.splitLeftPercent)) {
              // autoset to 60
              this.panel.trendstat.splitLeftPercent = 60;
            }
            var pct = this.panel.trendstat.splitLeftPercent;
            // make sure the value is in range
            if (pct < 0 || pct > 100) {
              this.panel.trendstat.splitLeftPercent = 60;
            }
            // update value
            pct = this.panel.trendstat.splitLeftPercent;
            // set the right side
            this.panel.trendstat.splitRightPercent = 100 - pct;
            // now refresh (render will not take effect)
            this.refresh();
          }
        }, {
          key: 'updateRightSplitPercentage',
          value: function updateRightSplitPercentage() {
            // make sure it is a number
            if (isNaN(this.panel.trendstat.splitRightPercent)) {
              // autoset to 40
              this.panel.trendstat.splitRightPercent = 40;
            }
            var pct = this.panel.trendstat.splitRightPercent;
            // make sure the value is in range
            if (pct < 0 || pct > 100) {
              this.panel.trendstat.splitRightPercent = 40;
            }
            // update value
            pct = this.panel.trendstat.splitRightPercent;
            // set the right side
            this.panel.trendstat.splitLeftPercent = 100 - pct;
            // now refresh (render will not take effect)
            this.refresh();
          }
        }, {
          key: 'toggleSplitDisplay',
          value: function toggleSplitDisplay() {
            if (!this.panel.trendstat.splitDisplay) {
              this.panel.trendstat.prevSplitRightPercent = this.panel.trendstat.splitRightPercent;
              this.panel.trendstat.prevSplitLeftPercent = this.panel.trendstat.splitLeftPercent;
              this.panel.trendstat.splitRightPercent = 0;
              this.panel.trendstat.splitLeftPercent = 100;
            } else {
              this.panel.trendstat.splitRightPercent = this.panel.trendstat.prevSplitRightPercent;
              this.panel.trendstat.splitLeftPercent = this.panel.trendstat.prevSplitLeftPercent;
            }
            this.refresh();
          }
        }, {
          key: 'getStatusColor',
          value: function getStatusColor(value) {
            var color = "yellow";
            switch (value) {
              case 0:
                color = "green";
                break;
              case 1:
                color = "yellow";
                break;
              case 2:
                color = "red";
                break;
              default:
                color = "yellow";
                break;
            }
            return color;
          }
        }, {
          key: 'convertTime',
          value: function convertTime(epoch) {
            var d = new Date(0);
            d.setUTCSeconds(epoch);
            return d.toISOString();
          }
        }, {
          key: 'link',
          value: function link(scope, elem, attrs, ctrl) {
            var $location = this.$location;
            var linkSrv = this.linkSrv;
            var $timeout = this.$timeout;
            var panel = ctrl.panel;
            var templateSrv = this.templateSrv;
            var data, linkInfo;
            var $panelContainer = elem.find('.panel-container');
            elem = elem.find('.trendstat-panel');
            var leftSideElem = elem.find('.trendstat-panel-left-side');
            function setElementHeight() {
              elem.css('height', ctrl.height + 'px');
            }

            function render() {
              if (!ctrl.data) {
                return;
              }

              data = ctrl.data;
              // get thresholds
              data.thresholds = panel.thresholds.split(',').map(function (strVale) {
                return Number(strVale.trim());
              });
              data.colorMap = panel.colors;
              //debugger;

              setElementHeight();
              //var body = panel.gauge.show ? '' : getBigValueHtml();
              panel.currentValueRaw = data.value;
              panel.currentValueRounded = data.valueRounded;
              panel.currentValueFormatted = data.valueFormated;
              panel.previousValueRaw = data.previousValue;
              panel.previousValueFormatted = data.previousValueFormatted;
              panel.previousValueRounded = data.previousValueRounded;
              panel.trendstat.trendIcon = data.trendIcon;
              panel.trendstat.trendIconFontSize = data.trendIconFontSize;
              panel.trendstat.trendIconColor = data.trendIconColor;
              panel.trendPercentage = data.trendPercentage;
              panel.trendAvgPercentage = data.trendAvgPercentage;
              panel.trendAvgValue = data.trendAvgValue;
              panel.trendAvgValueFormatted = data.trendAvgValueFormatted;

              panel.trendTimeStep = data.trendTimeStep;

              //var meh1 = ctrl.series[0].stats.avg;
              //var meh2 = ctrl.series[0].stats.current;
              //debugger;

              if (panel.colorBackground && !isNaN(data.valueRounded)) {
                var color = getColorForValue(data, data.valueRounded);
                if (color) {
                  panel.currentValueBackgroundColor = color;
                }
              } else {
                panel.currentValueBackgroundColor = '';
              }

              if (panel.colorValue && !isNaN(data.valueRounded)) {
                var _color = getColorForValue(data, data.valueRounded);
                if (_color) {
                  panel.valueColor = _color;
                }
              } else {
                panel.valueColor = '';
              }

              $(".trendstat-panel-left-side-sparklines").remove();
              if (panel.sparkline.show) {
                addSparkline();
              }

              $(".trendstat-panel-left-side-gauge").remove();
              if (panel.gauge.show) {
                addGauge();
              }

              //elem.toggleClass('pointer', panel.links.length > 0);

              //if (panel.links.length > 0) {
              //  linkInfo = linkSrv.getPanelLinkAnchorInfo(panel.links[0], data.scopedVars);
              //} else {
              //  linkInfo = null;
              //}
            } // end render()

            function getCurrentTime() {
              var d = new Date();
              return d.toISOString();
            }
            function applyColoringThresholds(value, valueString) {
              if (!panel.colorValue) {
                return valueString;
              }

              var color = getColorForValue(data, value);
              if (color) {
                return '<span style="color:' + color + '">' + valueString + '</span>';
              }

              return valueString;
            }

            function getSpan(className, fontSize, value) {
              value = templateSrv.replace(value, data.scopedVars);
              return '<span class="' + className + '" style="font-size:' + fontSize + '">' + value + '</span>';
            }

            function getBigValueHtml() {
              var body = '<div class="singlestat-panel-value-container">';

              if (panel.prefix) {
                body += getSpan('singlestat-panel-prefix', panel.prefixFontSize, panel.prefix);
              }

              var value = applyColoringThresholds(data.value, data.valueFormated);
              body += getSpan('singlestat-panel-value', panel.valueFontSize, value);

              if (panel.postfix) {
                body += getSpan('singlestat-panel-postfix', panel.postfixFontSize, panel.postfix);
              }

              body += '</div>';

              return body;
            }

            function getValueText() {
              var result = panel.prefix ? panel.prefix : '';
              result += data.valueFormated;
              result += panel.postfix ? panel.postfix : '';

              return result;
            }

            function addGauge() {
              var width = leftSideElem.width();
              var height = leftSideElem.height();

              ctrl.invalidGaugeRange = false;
              if (panel.gauge.minValue > panel.gauge.maxValue) {
                ctrl.invalidGaugeRange = true;
                return;
              }
              // delete the old gauge if it exits
              $(".trendstat-panel-left-side-gauge").remove();

              var plotCanvas = $('<div class="trendstat-panel-left-side-gauge"></div>');

              var plotCss = {
                top: '10px',
                margin: 'auto',
                position: 'absolute',
                height: height * 0.9 + 'px',
                width: width + 'px'
              };

              plotCanvas.css(plotCss);

              var thresholds = [];
              for (var i = 0; i < data.thresholds.length; i++) {
                thresholds.push({
                  value: data.thresholds[i],
                  color: data.colorMap[i]
                });
              }
              thresholds.push({
                value: panel.gauge.maxValue,
                color: data.colorMap[data.colorMap.length - 1]
              });

              var bgColor = config.bootData.user.lightTheme ? 'rgb(230,230,230)' : 'rgb(38,38,38)';
              var fontScale = parseInt(panel.valueFontSize) / 100;
              var dimension = Math.min(width, height);
              var fontSize = Math.min(dimension / 5, 100) * fontScale;
              var gaugeWidth = Math.min(dimension / 6, 60);
              var thresholdMarkersWidth = gaugeWidth / 5;

              var options = {
                series: {
                  gauges: {
                    gauge: {
                      min: panel.gauge.minValue,
                      max: panel.gauge.maxValue,
                      background: { color: bgColor },
                      border: { color: null },
                      shadow: { show: false },
                      width: gaugeWidth,
                      height: height
                    },
                    frame: { show: false },
                    label: { show: false },
                    layout: { margin: 0, thresholdWidth: 0 },
                    cell: { border: { width: 0 } },
                    threshold: {
                      values: thresholds,
                      label: {
                        show: panel.gauge.thresholdLabels,
                        margin: 8,
                        font: { size: 18 }
                      },
                      show: panel.gauge.thresholdMarkers,
                      width: thresholdMarkersWidth
                    },
                    value: {
                      color: panel.colorValue ? getColorForValue(data, data.valueRounded) : null,
                      formatter: function formatter() {
                        return getValueText();
                      },
                      font: { size: fontSize, family: panel.valueFontType }
                    },
                    show: true
                  }
                }
              };

              leftSideElem.append(plotCanvas);

              var plotSeries = {
                data: [[0, data.valueRounded]]
              };
              $.plot(plotCanvas, [plotSeries], options);
            }

            function addSparkline() {
              var width = leftSideElem.width() + 20;
              if (width < 30) {
                // element has not gotten it's width yet
                // delay sparkline render
                setTimeout(addSparkline, 30);
                return;
              }
              // delete the old sparkline if it exits
              $(".trendstat-panel-left-side-sparklines").remove();
              var height = ctrl.height;
              var plotCanvas = $('<div class="trendstat-panel-left-side-sparklines"></div>');
              var plotCss = {};
              plotCss.position = 'absolute';

              if (panel.sparkline.full) {
                plotCss.bottom = '5px';
                plotCss.left = '-5px';
                plotCss.width = width - 10 + 'px';
                var dynamicHeightMargin = height <= 100 ? 5 : Math.round(height / 100) * 15 + 5;
                plotCss.height = height - dynamicHeightMargin + 'px';
              } else {
                plotCss.bottom = "0px";
                plotCss.left = "-5px";
                plotCss.width = width - 10 + 'px';
                plotCss.height = Math.floor(height * 0.25) + "px";
              }

              plotCanvas.css(plotCss);

              var options = {
                legend: { show: false },
                series: {
                  lines: {
                    show: true,
                    fill: 1,
                    lineWidth: 1,
                    fillColor: panel.sparkline.fillColor
                  }
                },
                yaxes: { show: false },
                xaxis: {
                  show: false,
                  mode: "time",
                  min: ctrl.range.from.valueOf(),
                  max: ctrl.range.to.valueOf()
                },
                grid: { hoverable: false, show: false }
              };

              leftSideElem.append(plotCanvas);

              var plotSeries = {
                data: data.flotpairs,
                color: panel.sparkline.lineColor
              };

              $.plot(plotCanvas, [plotSeries], options);
            }

            this.events.on('render', function () {
              render();
              ctrl.renderingCompleted();
            });
          }
        }]);

        return TrendStatPanelCtrl;
      }(MetricsPanelCtrl));

      _export('TrendStatPanelCtrl', TrendStatPanelCtrl);

      TrendStatPanelCtrl.templateUrl = 'partials/template.html';
    }
  };
});
//# sourceMappingURL=ctrl.js.map
