# Grafana TrendStat Panel

This panel plugin provides a single stat with trending panel for [Grafana](http://www.grafana.org)

### Screenshots

##### Example Panels

![Default Theme](https://raw.githubusercontent.com/briangann/grafana-trendstat-panel/master/src/screenshots/default-trendstat.png)
![Default TrendStat With Threshold](https://raw.githubusercontent.com/briangann/grafana-trendstat-panel/master/src/screenshots/default-trendstat-w-threshold.png)

![Custom TrendStat](https://raw.githubusercontent.com/briangann/grafana-trendstat-panel/master/src/screenshots/alt-trendstat.png)
![Custom TrendStat With Limits](https://raw.githubusercontent.com/briangann/grafana-trendstat-panel/master/src/screenshots/alt-trendstat-limits.png)

##### Options

![Options](https://raw.githubusercontent.com/briangann/grafana-trendstat-panel/master/src/screenshots/options.png)

With Limits

![Options with Limits](https://raw.githubusercontent.com/briangann/grafana-trendstat-panel/master/src/screenshots/options-limits.png)

##### Limits Shown

![Options With Limits](https://raw.githubusercontent.com/briangann/grafana-trendstat-panel/master/src/screenshots/options-limits.png)

##### Radial Metrics
![Radial Metrics](https://raw.githubusercontent.com/briangann/grafana-trendstat-panel/master/src/screenshots/radialmetrics.png)

##### Thresholding
![Thresholding](https://raw.githubusercontent.com/briangann/grafana-trendstat-panel/master/src/screenshots/thresholding.png)

-------

## Features

* Data operator same as SingleStat panel (avg, sum, current, etc)
* Unit formats same as SingleStat

* All possible color options for trendstat components

## Building

This plugin relies on Grunt/NPM/Bower, typical build sequence:

```
npm install
bower install
grunt
```

For development, you can run:
```
grunt watch
```
The code will be parsed then copied into "dist" if "jslint" passes without errors.


### Docker Support

A docker-compose.yml file is include for easy development and testing, just run
```
docker-compose up
```

Then browse to http://localhost:3000


## External Dependencies

* Grafana 3.x

## Build Dependencies

* npm
* bower
* grunt

#### Acknowledgements

This panel is based on the "SingleStat" panel by Grafana

#### Changelog


##### v0.0.1
- Initial commit
