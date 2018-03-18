/******************************************************************************************
 * Man Vs Stream objects. I apologize about the lack of prototyping present,
 * I'm just not a fan of implementing prototype tactics upon origin object initialization
 * where prototyping is not necessary. I know I'm wrong, but I'll do what I want.
 * You don't like it, change it.
 *
 * @author VapidActions
 * @contact comatosekiller@gmail.com
 * @date 2018/03/01
 * @version 0.10 (alpha)
 ******************************************************************************************/

/**
 * Top level object container to prevent jquery conflicts and allow basic naming and preload templates
 */

var MVS = {};
MVS.templateLocation = 'javascript/templates/'; // update if location of templates moved

/**
 * Template rendering object
 */
MVS.Templates = function () {

    // rename and set for use in object
    var self = this;
    this.templates = new Array();

    /**
     * Load template file into self for re-use
     * @param {String} template Template Name (must match template file)
     * @param {Array} configuration
     * @returns {String}
     */
    this.loadTemplate = function(name) {
        // return it if we've previously loaded the base template
        if (self.templates[name]) return self.templates[name];

        // load the text file into javascript 
        var request = new XMLHttpRequest();
        request.open('GET', MVS.templateLocation + name + '.txt', false);
        request.send();
        // text file not found, or has no contents
        if (request.responseText <= 0) {
            return '<div class="warning">Template file <em>' + template +
            '</em> not found or empty. Check ' + MVS.templateLocation + '</div>';
        }
        self.templates[name] = request.responseText;
        
        return self.templates[name];
    };
    
    /**
     * Render the variables into the template and return replaced template string
     * @param {String} template Template Name to use (must match template file name)
     * @param {Array} configuration (optional) template replacement variable names
     * @returns {String}
     */
    this.render = function (template, configuration) {
        // safety load
        configuration = (configuration instanceof Array) ? configuration : [];
        // retrieve basic template text
        var output = self.loadTemplate(template);;
        
        // loop through and replace variables in template
        for (option in configuration) {
            var find = new RegExp('\{' + option + '\}');
            output = output.replace(find, configuration[option]);
        }
        return output;
    };

};

/**
 * Basic timer object. I know "don't init with the base object", but meh, lazyness.
 * and really MVS is technically the base object in relation, so loophole achieved? ...
 * 
 * @param {String} start date string for timer start
 * @param {String} end (optional) date string for timer end
 */
MVS.Timer = function (start, end) {

    // rename and set for use in object
    var self = this;
    // store timer initialization time
    this.init = new Date(start);
    // store timer end. If not provided, timer is an instant end.
    this.end = (typeof end === 'string') ? new Date(end) : this.init;
    // placeholder for total paused duration
    this.pauseDuration = 0;
    // placeholder for paused initialization time
    this.pauseStart = false;

    /**
     * Retrieve hours/minutes/second
     * @param {Number} milliseconds Number of milliseconds to break into hours/minutes/seconds 
     * @return {Array}
     */
    this.getTimeArray = function (milliseconds) {
        result = new Array();
        result.hours = Math.floor((milliseconds/1000*60*60));
        result.minutes = Math.floor((milliseconds/1000*60));
        result.seconds = Math.floor((milliseconds/1000));
        return result;
    };

    /**
     * Retrieve passed duration hours/minutes/seconds
     * @return {Array}
     */
    this.getDuration = function () {
        var current = new Date();
        var difference = current - self.init;
        // remove paused duration to get correct total running time
        difference = difference - self.pauseDuration;
        return self.getTimeArray(difference);
    };

    /**
     * Retrieve hours/minutes/seconds remaining
     * @return {Array}
     */
    this.getRemaining = function () {
        var difference = self.end - self.init;
        // add paused duration to end time to get correct remaining
        difference = difference + self.pauseDuration;
        return self.getTimeArray(difference);
    };

    /**
     * Pause the timer
     * @return null
     */
    this.pause = function () {
        self.pauseStart = new Date();
    };

    /**
     * Resume the timer
     * @return null
     */
    this.resume = function () {
        var current = new Date();
        var difference = current - self.init;
        self.pauseDuration = self.pauseDuration + difference;
    };
};

/**
 * Incentive queue container
 * 
 * @param {String} name
 * @param {Number} counter
 */
MVS.Queue = function (name, counter) {
    var self = this; // rename and set for use in object
    this.name = name;
    this.counter = counter ? counter : 0;
    
    this.getCount = function() {
        return self.counter;
    };
    
    this.add = function() {
        self.counter++;
        return self.getCount();
    };
    
    this.subtract = function () {
        self.counter = self.counter > 0 ? self.counter-- : 0;
        return self.getCount();
    };
    
    this.draw = function () {
        return MVS.Templates.render('queue', self);
    };
};





// configuration object
// incentives container
// incentive object

MVS.IncentivesContainer = function (name, configuration) {
    
};

MVS.Incentive = function (name, configuration) {
    
};