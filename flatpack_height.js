function flatpack(selection){

    var titletexts = ["Climate Change Calculator","","","","","","","","",""];

    var dw = Math.floor(window.innerWidth);

    var guidetexts = dw >= 600 ? ["Since February, countries have been publishing their plans for cutting greenhouse gas (GHGs) emissions, ahead of a UN meeting in Paris in December...","If every country keeps pumping GHGs into the environment at its current rate until 2100, the planet&rsquo;s surface will warm by an average of up to 6&deg;C, bringing about a dramatically different climate...","The initial pledges for emissions cuts refer to the period between <span class='boldText'>2020 and 2030</span>. Let&rsquo;s see what would happen if countries curb their emissions in line with their stated aims...","Most countries have now announced pledges, but the biggest current emitter, China, is among the least ambitious. Across the board, current pledges won&rsquo;t be enough to limit the temperature increase to 2&deg;C by 2100. What about after 2030?","The Paris accord due to be struck in December is supposed to ensure countries ratchet up their pledges and some have already set targets for <span class='boldText'>2030-2050</span>, allowing us to make educated guesses about the medium term...","These longer term plans are more ambitious, and if countries deliver on them, the pace of emissions growth could be slowed substantially. But there is still the question of what would happen between 2050 and 2100...","Even if every country met the pledges it has made to date, we would still be looking at a rise in emissions and temperatures. So what happens if the biggest emitters manage to cut their greenhouse gases <span class='boldText'>after 2050?</span>","If China, the US, EU and India all slashed their emissions sharply after 2050, it would make a big difference, but global temperature rise would still exceed 2&deg;C. What if those four eased off and left other countries to act?","As we can see, even a concerted effort by the next five largest emitters would make a much smaller impact. Without commitments from the very biggest, the battle could be lost","",""]
    :
    ["Since February, countries have been publishing their plans for cutting greenhouse gas (GHGs) emissions, ahead of a UN meeting in Paris in December...","If every country keeps pumping out GHGs at its current rate until 2100, the planet&rsquo;s surface will warm by up to 6&deg;C...","The initial pledges for emissions cuts refer to <span class='boldText'>2020-2030</span>. Let&rsquo;s see what would happen if countries meet those commitments...","China has pledged only a small cut, and globally current pledges won&rsquo;t limit temperature rises to the target of 2&deg;C. What about after 2030?","The Paris accord due to be struck in December is supposed to ensure countries ratchet up their pledges and some have already set targets for <span class='boldText'>2030-2050</span>...","These longer term plans go further, and could markedly slow emissions growth. But there is still the question of what happens between 2050 and 2100...","Even if every pledge to date is met, emissions will continue to rise. So what happens if the biggest emitters cut deeper still <span class='boldText'>after 2050?</span>","If China, the US, EU and India all slashed emissions sharply after 2050, it would make a big difference. What if those four eased off and left others to act?","Even a concerted effort by the next five largest emitters would make a much smaller impact. Without action from the very biggest, the battle could be lost","",""];

    var usertexts = ["Now it&rsquo;s your turn. Use the sliders below to set countries&rsquo; ambitions for emissions cuts. We&rsquo;ll start with the period from 2020 to 2030...","Now repeat the last step for the years between 2030 and 2050, to see the impact of medium-term ambitions...","Finally, set targets for the last half of the century. Once you&rsquo;ve finished, you will be able to explore and share your unique results"];

    var animations = [
      function() {backBtn.classed('hidden',true);},
      function() {doClip(2100,2000);backBtn.classed('hidden',false);},
      function() {drawCurtains();d3.select('#to2030').classed('disabled introstate',false);yearLabelHolder.classed('introstate',false);},
      function() {preDraw(d3.range(0,10,1),INDCs1);},
      function() {toNextSliders('1');d3.select('#to2030').classed('disabled',true);yearLabelHolder.transition().duration(500).style({'left':x(2040)+'px'});yearLabel.html('2030-2050');},
      function() {preDraw(d3.range(0,10,1),INDCs2);},
      function() {toNextSliders('2');d3.select('#to2050').classed('disabled',true);yearLabelHolder.transition().duration(500).style({'left':x(2075)+'px'});yearLabel.html('2050-2100');},
      function() {preDraw(d3.range(0,10,1),[0,0,0,0,1,1,1,1,1,1]);},
      function() {preDraw(d3.range(0,10,1),[1,1,1,1,0,0,0,0,0,1]);},
      function() {allowInteraction();d3.select('#to2100').classed('disabled',true);yearLabelHolder.transition().duration(500).style({'left':x(2025)+'px'});yearLabel.html('2020-2030');},
      function() {resetAll();swipeIndex = 0;doClip(2012,500);backBtn.classed('hidden',true);d3.selectAll('.curtains').style('opacity',0);}
      ];

    var backAnimations = [
      function() {backBtn.classed('hidden',true);doClip(2012,2000);},
      function() {backBtn.classed('hidden',false);doClip(2100,2000);d3.selectAll('.curtains').style('opacity',0);},
      function() {drawCurtains();preDraw(d3.range(0,10,1),[1,1,1,1,1,1,1,1,1,1]);},
      function() {backOne();yearLabelHolder.transition().duration(500).style({'left':x(2025)+'px'});yearLabel.html('2020-2030');},
      function() {drawCurtains();preDraw(d3.range(0,10,1),[1,1,1,1,1,1,1,1,1,1]);},
      function() {backTwo();yearLabelHolder.transition().duration(2000).style({'left':x(2040)+'px'});yearLabel.html('2030-2050');},
      function() {preDraw(d3.range(0,10,1),[1,1,1,1,1,1,1,1,1,1]);},
      function() {preDraw(d3.range(0,10,1),[0,0,0,0,1,1,1,1,1,1]);},
      function() {preDraw(d3.range(0,10,1),[1,1,1,1,0,0,0,0,0,1]);},
      function() {backBtn.classed('hidden',true);}
      ];

    // var bounds = d3.select(selection).node().getBoundingClientRect();
    // //console.log(bounds);
    var orient = window.orientation;
    
    var width = Math.floor(window.innerHeight*.9), height = Math.floor(window.innerHeight)-5;
    if(width > Math.floor(selection.node().clientWidth))width = Math.floor(selection.node().clientWidth);

    var barWidth = Math.floor(d3.select('#holder').node().clientWidth);

    var sectionsHolder = selection.append('div').attr({
      'id':'sections'
    });

    var vis = selection.append('div').attr({
      'id':'vis'
    });

    var slidetext = vis.append("span")
      .attr({
        "id":"slidetext",
        "class":'first',
        x:0,
        y:10
      })
      .text(titletexts[0]);

    var progressHolder = slidetext.append('div').attr({
      'id':'progressHolder'
    }).style({
        'width':barWidth + 'px'
    });

    var progressbar = slidetext.append('div').attr({
      'id':'progressbar'
    });

    var sections = sectionsHolder.selectAll('section.textBox')
        .data(d3.range(0,guidetexts.length,1)).enter()
        .append('section')
        .attr({
            'class':'textBox'
        })
        .html(function(d){return guidetexts[d]});

    // var footer = vis.append('footer').attr({
    //         'id':'ft-footer',
    //     }).style({
    //         'width':(barWidth-5) + 'px'
    //     });

    // var footerContents = footer.append('span');

    // footerContents.html("<span>Built in collaboration with&nbsp;&nbsp;<a href='http://www.climate-kic.org/' target='_blank' title='Climate KIC - external website'><img src='textonlylogo.png'></a>, creators of the <a href='http://tool.globalcalculator.org/' target='_blank' title='The Global Calculator' alt='The Global Calculator'>Global Calculator</a></span>");

    var sectionHeights = [];
    sections.each(function(){return sectionHeights.push(d3.select(this).node().clientHeight)});
    var maxSectionHeight = d3.max(sectionHeights);
    var titleHeight = slidetext.node().getBoundingClientRect().bottom-slidetext.node().getBoundingClientRect().top;
    var heightOffset = maxSectionHeight + (dw >= 600 ? 20:10);

    var storyState = 0;
    //console.log('heightOffset',heightOffset);

    var guidetextHolder = vis.append("span")
      .attr({
        "id":"guidetext",
        'class':'first'
      })
      .style({
        'height':(heightOffset + 25) + 'px'
      })

      guidetextHolder.append('span')
      .attr({
        'class':'innerText'
      })
      .html(guidetexts[0]);

  	var drawViz = function(){
  		//console.log("SILENT")
  	};

    var drawData = function(){
        //console.log("SILENT")
    };

    var height = Math.floor(window.innerHeight-heightOffset)-5,
    tempWidth = height*.9;
    if(width > Math.floor(window.innerWidth))width = Math.floor(window.innerWidth);
    if(width < 800){height = tempWidth*1.1}else{height = Math.floor(window.innerHeight-heightOffset)-50};
    var stackColumnWidth = 240;
    if(width > 800){stackColumnWidth = 510}else if(width > 500){stackColumnWidth = 400};
    
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        // if(window.orientation != 0)(height=width);
    }

    var pauseLength = 750;
    var transitionsOnOff = 'off';
    if(window.innerWidth > 800)transitionsOnOff = 'on';
    if(window.innerWidth < 800)duration = 0;
    if(window.innerWidth < 800)pauseLength = 250;

    function doProgressBar(){
      // barWidth = Math.floor(d3.select('#holder').node().clientWidth);
      // d3.select('#progressbar').transition().duration(500).style('width',((swipeIndex+1)/(guidetexts.length))*barWidth + 'px')
      
      storyState == 0 ? counter1.html((swipeIndex+1) + "/" + (guidetexts.length-1)):counter2.html((sliderYear+1) + "/" + (3));

      // storyState == 0 ? d3.select('#progressbar').transition().duration(500).style('width',((swipeIndex+1)/(guidetexts.length+1))*barWidth + 'px'):d3.select('#progressbar').transition().duration(500).style('width',((sliderYear+1)/(3))*barWidth + 'px');
    };

    var lookup = {},
      margin = { top:40, left:30, bottom:d3.max([height,width])/20, right:20 },
      plotWidth = width-(margin.left+margin.right),
      plotHeight = height-(margin.top+margin.bottom),
      xScale = d3.scale.linear().range([margin.left,plotWidth-margin.right]),
      yScale = d3.scale.linear().range([plotHeight-margin.top,margin.bottom+75]),
      slidenum = 0,
      fooData = {},
      bgfilter,
      borderClass,
      moveTo,
      duration = 50,
      dataset = [],
      areasData,
      sliderDataset = [],
      nestedData = [],
      array2030 = [],
      array2050 = [],
      array2100 = [],
      barData = [],
      dynamicData = [],
      sliderYear = 0,
      sliderYears = [2030,2050,2100],
      sliderBands = [2020,2030,2050,2100],
      resetData,
      cumulative,
      cumulativeArray = [],
      tMax,
      tMin,
      tMean,
      tweetData = [[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1]],
      tweetText,
      tweetSums = [3,3,3,3,3,3,3,3,3,3],
      INDCs1 = [],
      INDCs2 = [],
      counter2;
    
    //console.log('width',width);
    //console.log('height',height);
    //console.log('plotWidth',plotWidth);


    var dispatch = d3.dispatch("active","progress");

    var currentIndex = -1;
    var containerStart = 0;
    var sectionIndex = 0;

    var swipeIndex = 0;

    addEventListener("keydown", function(event) {
      if(event.keyCode == 39){
        swipeForward();
      }
    });

    addEventListener("keydown", function(event) {
      if(event.keyCode == 37){
        swipeBack();
      }
    });

    function swipeForward(){
        //console.log('SWIPED FORWARD')
      if(swipeIndex == (guidetexts.length)-1){
        animations[swipeIndex]();
        changetext(guidetexts[swipeIndex]);
        doProgressBar();
      }else if(swipeIndex == 8){
        swipeIndex = swipeIndex + 1;
        animations[swipeIndex]();
        doProgressBar();
      }else
        swipeIndex = swipeIndex + 1;
        animations[swipeIndex]();
        changetext(guidetexts[swipeIndex]);
        doProgressBar();
    };

    function swipeBack(){
        //console.log('SWIPED BACKWARD')
      if(swipeIndex == 0){
        //console.log('start');
      }else
        swipeIndex = swipeIndex - 1;
        backAnimations[swipeIndex]();
        changetext(guidetexts[swipeIndex]);
        doProgressBar();
    };
 

    function resize() {
        sectionPositions = [];
        var startPos;
        sections.each(function(d,i) {
          var top = this.getBoundingClientRect().top;
          if(i === 0) {
            startPos = top;
          }
          sectionPositions.push(top - startPos);
        });
        //console.log('sectionPositions',sectionPositions)
        containerStart = d3.select('#vis').node().getBoundingClientRect().top + window.pageYOffset;
        //console.log('containerStart',containerStart)
    };

    function scrollPosition() {
        //console.log('scrolled');
        var pos = window.pageYOffset - 10;
        //console.log('pos',pos)
        sectionIndex = d3.bisect(sectionPositions, pos);
        sectionIndex = Math.min(sections.size() - 1, sectionIndex);

        if (currentIndex !== sectionIndex) {
          changetext(titletexts[sectionIndex],guidetexts[sectionIndex]);
          animations[sectionIndex]();
          //console.log('slide',sectionIndex)
          currentIndex = sectionIndex;
        }

        var prevIndex = Math.max(sectionIndex - 1, 0);
        var prevTop = sectionPositions[prevIndex];
        var progress = (pos - prevTop) / (sectionPositions[sectionIndex] - prevTop);
        
    };

    // var swipeMessage = vis.append("span")
    //   	.attr("id","navintro")
    //   	.style("top",heightOffset+30 + 'px')
    //   	.html("Swipe right-to-left to progress, opposite to go back &nbsp;&#10006;")
    //   	.on('click',function(){d3.select('#navintro').style('opacity',0)});

    var buttonHolder = d3.select("#guidetext").append("span").attr("class","buttonHolder");
    var backBtn = d3.select(".buttonHolder").append("span").attr("class","backbutton hidden").html("&laquo; Back");
    var counter1 = buttonHolder.append('span').attr({"class":"slideCounter one"}).html((swipeIndex+1) + "/" + (guidetexts.length+1));
    var forBtn = d3.select(".buttonHolder").append("span").attr("class","animatebutton").html("Next &raquo;");

    forBtn.on("click",swipeForward);
    backBtn.on("click",swipeBack);

    doProgressBar();

    var plotHolder = d3.select('#vis').append('div').attr({
      'id':'plotHolder'  
    })
    .style({
      	width:width + 'px',
      	height:height + 'px',
    });

    var buttonLayer = d3.select('#plotHolder').append('div').attr({
      'id':'buttonLayer'  
    })
    .style({
      	width:width + 'px',
      	height:height + 'px',
    });

    var titleHolder = buttonLayer.append('div').attr({
        'class':'titleHolder'        
    }).style({
        'left':margin.left+'px',
        'top':margin.top-10 +'px',
        'width':width-(margin.left+margin.right) + 'px'
    })

    var axisTitleLeft = titleHolder.append('p').attr({
        'class':'axisTitle left'
    }).html("Annual GHG emissions (Gt CO<sub>2</sub>e)");

    var axisTitleRight = titleHolder.append('p').attr({
        'class':'axisTitle right'
    }).html("Global mean temp. change by 2100 (&deg;C)");

    var veilrow = buttonLayer.append('div').attr({
        'id':'veilrow'
    }).style({
        'left':margin.left+'px',
        'top':height*0.425+'px'
    })

    var plot = d3.select('#plotHolder').append('div').attr({
      'id':'plot'  
    })
    .style({
      	width:width + 'px',
      	height:height + 'px',
    });

    var svg = d3.select('#plot').append('svg')
        .attr({
    		id:'thesvg',
          	width:width,
          	height:height
        })
        .append('g')
          .attr('transform','translate(0,0)');

  	var backdrop = svg.append('rect').attr({
  		'x':0,
  		'y':0,
  		'width':width,
  		'height':height
  	})
  	.style('fill','#fff1e0');

	var defs = d3.select('#thesvg').append('defs');

  var arrows = defs.append('marker').attr({
    'id':'arrow',
    'markerWidth':8,
    'markerHeight':9,
    'refX':0,
    'refY':5
  });
  var arrowsPaths = arrows.append("path").attr({
    'd':'M0,5l8,-4l0,8,l-8,-4'
  })
  .style({
    'stroke':'none',
    'fill':'#74736c'
  });

  var areaClip = defs.append('clipPath').attr('id','areaClip');

	var gradient1 = defs.append('linearGradient').attr({
	'id':'grad1',
	'x1':'0%',
	'y1':'0%',
	'x2':'0%',
	'y2':'100%'
	});

	gradient1.append('stop').attr('offset','0%').style({
	'stop-color':'#d7706c',
	'stop-opacity':'0.01'
	});

	gradient1.append('stop').attr('offset','100%').style({
	'stop-color':'#cc4843',
	'stop-opacity':'1'
	});

	var gradient2 = defs.append('linearGradient').attr({
	'id':'grad2',
	'x1':'0%',
	'y1':'100%',
	'x2':'0%',
	'y2':'0%'
	});

	gradient2.append('stop').attr('offset','0%').style({
	'stop-color':'#d7706c',
	'stop-opacity':'0.01'
	});

	gradient2.append('stop').attr('offset','100%').style({
	'stop-color':'#cc4843',
	'stop-opacity':'1'
	});

    queue()
      .defer(d3.csv, 'new.csv')
      .await(initialise); 

  	var x = d3.scale.linear()
    	.range([margin.left,(width-3.5*margin.right)])
    	.domain([1990,2100]);

  	var y = d3.scale.linear()
    	.range([height*0.5-margin.bottom-30,margin.top])
    	.domain([0,140]);

    var yearLabelHolder = buttonLayer.append('div')
    .attr({
        'class':'yearLabelHolder introstate'
    })
    .style({
        'left':x(2025) + 'px',
        'top':y(140) + 'px'
    });
    var yearLabel = yearLabelHolder.append('span').html('2020-2030');

    var clipRect = areaClip.append('rect').attr({
        'x':x(1990),
        'y':y(140),
        'width':x(1990)-x(1990),
        'height':y(0)-y(140)
    });

  	var sliderX = d3.scale.linear()
			.domain([0, 10])
			.range([0, plotWidth])
			.clamp(true);

	var sliderY = d3.scale.linear()
		  	.domain([0,1])
			.range([(height-1*margin.bottom)*0.89-5,height*0.55 + (dw >= 600 ? 10:0)])
			.clamp(true);



    var xRect = d3.scale.linear()
            .domain([0, 70])
            .range([(plotWidth/10)*0.05, (plotWidth/10)*0.95]);



	var arrowAdjust = Math.floor((sliderY.range()[0]-sliderY.range()[1])/20);

        var line = d3.svg.line()
		    .interpolate("basis")
		    .x(function(d) { return x(d.year); })
		    .y(function(d) { return y(d.volume); });

	    var area = d3.svg.area()
	    	.interpolate("basis")
		    .x(function(d) { return x(d.year); })
		    .y0(function(d) { return y(d.y0); })
		    .y1(function(d) { return y(d.y0 + d.y); });

	    var stack = d3.layout.stack()
	    	.offset('zero')
		    .values(function(d) { return d.values; })
		    .x(function(d) { return d.year; })
    		.y(function(d) { return d.volume; });;
  	

    function initialise(error, csvdata){

      	if (error) return console.error(error);

      	data = csvdata.map(function(d){return{
          		series: d.series,
          		year: +d.year,
          		volume: +d.volume,
              	type: d.type,
              	y2030: +d.y2030,
              	y2050: +d.y2050,
              	y2100: +d.y2100,
              	lohi: d.lohi
        	}
	    });
	    original = csvdata.map(function(d){return{
          		series: d.series,
          		year: +d.year,
          		volume: +d.volume,
              	type: d.type,
              	y2030: +d.y2030,
              	y2050: +d.y2050,
              	y2100: +d.y2100,
              	lohi: d.lohi
        	}
	    });
        initialsliderData = data.filter(function(d){return d.type == 'sliderval'});
        initialsliderData = d3.nest().key(function(d) { return d.series; })
      	.entries(initialsliderData);
        sliderData = (JSON.parse(JSON.stringify(initialsliderData)));
        sliderDataset = sliderData;

        sliderData.forEach(function(d){
            INDCs1.push(d.values[2].y2030);
            INDCs2.push(d.values[2].y2050);
        })

        data = data.filter(function(d){return (d.year in oc([1990,2000,2010,2012,2030,2050,2100]))});
        data = data.filter(function(d){return d.type == 'seriesval'});

        original = original.filter(function(d){return (d.year in oc([1990,2000,2010,2012,2030,2050,2100]))});
        original = original.filter(function(d){return d.type == 'seriesval'});
      	dataset = original;

      	data = d3.nest().key(function(d) { return d.series; })
      	.entries(data);

      	nestedData = data;
      	//console.log('nestedData',data)
      	linesData = data.filter(function(d){return d.key == '2DS' || d.key == '6DS'});
      	//console.log('lineData',linesData)
      	areasData = data.filter(function(d){return d.key !== '2DS' && d.key !== '6DS' && d.key !== 'World' && d.key !== 'Cumu'});
        // areasData = areasData.reverse();
      	//console.log('areasData',areasData);
      	resetData = (JSON.parse(JSON.stringify(areasData)));
      	dynamicData = (JSON.parse(JSON.stringify(areasData)));
      	oldData = (JSON.parse(JSON.stringify(areasData)));;

      	var theKeys = [];
      	populateKeys = function(data){
      		data.forEach(function(d){return theKeys.push(d.key)})
      	};

        var z = d3.scale.ordinal()
        	.domain(theKeys)
        	// .range(['#af516c','#76acb8','#ecafaf','#7fd8f5','#d7706c','#3d7ab3','#b07979','#ccc2c2','#cd9f8c','#8f7d95']);
            .range(['#d7706c','#91a1c7','#ecafaf','#b07979','#5a9992','#e8aa7d','#af516c','#7fd8f5','#3d7ab3','#b8b1a9']);

      	var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom")
        .ticks(10)
        .tickSize(4)
        .tickFormat(d3.format("d"));

      	var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .ticks(5)
        .tickSize(-1*(width-(margin.left+3.5*margin.right)))
        .tickFormat(d3.format("d"));

        var theXAxis = svg.selectAll('g.xAxis').data([1]).enter().append('g')
            .attr({
                "transform": function(d){return 'translate(0,' + (height*0.5-margin.bottom-30) + ')'},
                'class':'x axis'
            })
            .call(xAxis);

        d3.selectAll(".axis.x .tick text").attr({"y":width > 600 ? 7:5});

        var theyAxis = svg.selectAll('g.yAxis').data([1]).enter().append('g')
            .attr({
                "transform": function(d){return 'translate('+margin.left+',0)'},
                'class':'y axis'
            })
            .call(yAxis);

        var emissionsTitle = titleHolder.append('p').attr({
            'class':'axisTitle left'
        }).style({
            // 'left':margin.left + "px",
            'top':((height*0.55)-(margin.top-10)*2-10) + "px",
            "position":"absolute"
        }).html("Efforts to cut emissions (feasible limits in Gt CO<sub>2</sub>e)");

	    var sliderTopLabel = svg.append('text').attr({
		    	'class':'sliderLabel',
		    	'x':width-margin.right,
		    	'y':height*0.55-12
		    }).text('No change: on course for 6\u00B0C rise');

      var sta = svg.append("path").attr({
        class:'arrowPath',
        d:'M' + (width-margin.right+2) + ',' + (height*0.55-16) + 'l15,0l0,' + (sliderY.range()[1]-(height*0.55-16)) + 'l' + (-17-plotWidth/10*0.05) + ',0'
      });

	    var sliderBottomLabel = svg.append('text').attr({
		    	'class':'sliderLabel',
		    	'x':width-margin.right,
		    	'y':(height-margin.bottom)*0.89+10
		    }).text('Cuts required to restrict rise to 2\u00B0C');

      var sba = svg.append("path").attr({
        class:'arrowPath',
        d:'M' + (width-margin.right+2) + ',' + ((height-margin.bottom)*0.89+7) + 'l15,0l0,' + (-13) + 'l' + (-17-plotWidth/10*0.05) + ',0'
      });

      var indcKey = svg.append('text').attr({
          'class':'sliderLabel left',
          'x':margin.left+50,
          'y':height*0.55-12
        }).text(' pledges');

      var indcKeyLine = svg.append("line").attr({
        class:"indcKeyLine",
        "x1":margin.left,
        "x2":margin.left+45,
        "y1":height*0.55-16,
        "y2":height*0.55-16
      })

    	drawViz = function(){

    	var areas = svg.selectAll("path.shadedArea")
		    .data(stack(areasData));

		    areas.enter().append("path")
		    .attr({
		    	class:function(d) {return 'shadedArea ' + d.key}
		    });

		    areas.exit().remove();

		    areas.transition()
            .ease("linear")
		    .duration(duration)
		    .attr({
		    	d:function(d) { return area(d.values); },
		    	fill:function(d,i) {return z(i)},
                'clip-path':'url(#areaClip)'
		    });

		    //console.log("DRAWN")

    	}

        drawViz();

	    svg.append('rect').attr({
	    	'class':'curtains left',
	    	'x':x(1990),
	    	'y':y.range()[1],
	    	'width':x(2020)-x(1990),
	    	'height':y.range()[0]-y.range()[1]
	    })
        .style('opacity',0)
	    svg.append('rect').attr({
	    	'class':'curtains right',
	    	'x':x(2030),
	    	'y':y.range()[1],
	    	'width':x(2100)-x(2030),
	    	'height':y.range()[0]-y.range()[1]
	    }).style('opacity',0);

        getCumulative('a');

        doClip(2012,3000);

	    var lines = svg.selectAll('path.refLine').data(linesData).enter().append('path')
	    	.attr({
	    		'class':function(d){return 'refLine ' + d.key},
	    		d:function(d){return line(d.values)}
	    	});

        var textPaths = defs.selectAll('path.textPath').data(linesData).enter().append('path')
            .attr({
                'class':function(d){return 'textPath ' + d.key},
                'id':function(d){return 'textPath' + d.key},
                d:function(d){return line(d.values)}
            });

        var undulating = svg.selectAll('text.undulating').data(linesData).enter().append('text')
            .attr({
                'class':function(d){return 'undulating ' + d.key}
            })
            .append('textPath')
            .attr({
                'xlink:href':function(d){return '#textPath' + d.key},
                'startOffset':width > 600 ? x(2020):x(2010)
            })
            .text(function(d){return "Pathway for " + d.key.replace(/D/g," \u00B0C warming").replace(/S/g,"")});


	  	d3.select("#thesvg").append('g').attr({
            'id':'slider',
            'transform':'translate('+margin.left+',0)'
  		});
        
		refreshSeriesData();

	  	makePatch(sliderX, sliderY, '#thesvg', function(index, percent){

        	var lo = sliderData[index].values[0]['y' + sliderYears[sliderYear]];
        	var hi = sliderData[index].values[1]['y' + sliderYears[sliderYear]];

        	var val1 = array2030[index];
        	var val2 = array2050[index];
        	var val3 = array2100[index];
        	var oldPts = [val1,val2,val3];

        	barData[Math.floor(index)] = percent;

    		refVal = unScaleData(lo,hi,oldPts[sliderYear],percent);

    		//console.log('important',refVal/eval('array' + sliderYears[sliderYear])[index]);

    		var relative = refVal/eval('array' + sliderYears[sliderYear])[index];

        	oldPts[sliderYear] = refVal;

        	areasData[index].values.filter(function(d){return d.year == sliderYears[sliderYear]})[0].volume = oldPts[sliderYear];

            for(j=sliderYear+1;j<3;j++){
	        	oldPts[j] = oldPts[j]*relative;

				areasData[index].values.filter(function(d){return d.year == sliderYears[j]})[0].volume = oldPts[j];
			}
			myTransition(index+1);
			drawViz();
			//console.log('moved',index,percent,oldPts[2]);
			//console.log('out with the old',array2030,barData);
		});







		var mainLine, paleLine, chart, labels;

		drawData();
        

		function drawData(){

			circles = d3.select('#slider').selectAll('rect.single')
				.data(barData);
        
            circles.enter()
				.append('rect')
					.attr({
                        'class':'fixed',
						'x':function(d,i){return sliderX(i) + (plotWidth/10)*0.05;},
                        'width':(plotWidth/10)*0.9,
                        'y':function(d){
                            //console.log((sliderY(d)))
                            return (sliderY.range()[1])},
                        'height':function(d){ return (sliderY.range()[0]-sliderY.range()[1])}
					});

			circles.enter()
				.append('rect')
					.attr({
                        'class':'single',
						'x':function(d,i){return sliderX(i) + (plotWidth/10)*0.05;},
                        // 'x':function(d,i){return sliderX(i) + (((plotWidth/10)*0.525) - (xRect(oldData[i].values[sliderYear+4].volume/2)))},
                        'width':(plotWidth/10)*0.9,
                        // 'width':function(d,i){return xRect(oldData[i].values[sliderYear+4].volume)},
                        'y':function(d){
                            return (sliderY(d));},
                        'height':function(d){ return sliderY.range()[0]-sliderY(d);},
                        'fill':function(d,i) {return z(i)}
					});

			circles.enter()
				.append('line')
					.attr({
                        'class':'refMarker',
						'x1':function(d,i){return sliderX(i) + (plotWidth/10)*0.05;},
                        'x2':function(d,i){return sliderX(i) + (plotWidth/10)*0.95;},
                        'y1':function(d,i){
                            return (sliderY(sliderData[i].values[2]['y' + sliderYears[sliderYear]]));},
                        'y2':function(d,i){ return (sliderY(sliderData[i].values[2]['y' + sliderYears[sliderYear]]));},
                        // 'stroke':function(d,i) {return z(i)},
                        // 'stroke':function(d,i) {return '#74736c'},
                        'display':function(d,i) {
                        	if(sliderData[i].values[2]['y' + sliderYears[sliderYear]] != 1){
                    			return 'block'}else{
                        		return 'none'
                        	}
                        }
					});

            circles.enter()
                .append('path')
                    .attr({
                        'class':'triangle down hidden',
                        'd':function(d,i){return 'M' + (sliderX(i) + (plotWidth/10)*0.35) + ',' + (0) + 'L' + (sliderX(i) + (plotWidth/10)*0.65) + ',' + (0) + 'L' + (sliderX(i) + (plotWidth/10)*0.5) + ',' + (0+(arrowAdjust))},
                        'transform':function(d){return 'translate(0,'+(sliderY(d)+arrowAdjust/2)+')'}
                    });
            circles.enter()
                .append('path')
                    .attr({
                        'class':'triangle up hidden',
                        'd':function(d,i){return 'M' + (sliderX(i) + (plotWidth/10)*0.35) + ',' + (0) + 'L' + (sliderX(i) + (plotWidth/10)*0.65) + ',' + (0) + 'L' + (sliderX(i) + (plotWidth/10)*0.5) + ',' + (0-(arrowAdjust))},
                        'transform':function(d){return 'translate(0,'+(sliderY(d)+(-1*arrowAdjust/2))+')'}
                    });

            circles.enter()
                .append('text')
                .attr({
                    'class':'sliderTitle nomobile',
                    'x':function(d,i){return sliderX(i) + (plotWidth/10)*0.5;},
                    'y':function(d){ return sliderY(d3.mean(sliderY.domain()))+(arrowAdjust);},
                    'text-anchor':'middle'
                })
                .text(function(d,i){return areasData[i].key.replace(/USA/g,"US").replace(/RoW/g,"Others")});

            circles.enter()
                .append('text')
                .attr({
                    'class':'sliderTitle nodesktop',
                    'x':function(d,i){return sliderX(i) + (plotWidth/10)*0.5;},
                    'y':function(d){ return sliderY(d3.mean(sliderY.domain()))+(arrowAdjust);},
                    'text-anchor':'middle'
                })
                .text(function(d,i){return areasData[i].key.replace(/Australia/g,"Aus.").replace(/Canada/g,"Can.").replace(/USA/g,"US").replace(/RoW/g,"Others")});

            circles.exit().remove();
            //console.log("SLIDERX",sliderX(0))



            // circles.enter()
            //     .append('text')
            //     .attr({
            //         'class':'co2val top',
            //         'x':function(d,i){return sliderX(i) + (plotWidth/10)*0.5;},
            //         'y':function(d){ return sliderY(d3.max(sliderY.domain()))-3;},
            //         'text-anchor':'middle'
            //     })
            //     .text(function(d,i){return d3.format(".01f")(oldData[i].values[sliderYear+4].volume)});

            // circles.enter()
            //     .append('text')
            //     .attr({
            //         'class':'co2val base',
            //         'x':function(d,i){return sliderX(i) + (plotWidth/10)*0.5;},
            //         'y':function(d){ return sliderY(d3.min(sliderY.domain()))+11;},
            //         'text-anchor':'middle'
            //     })
            //     .text(function(d,i){return d3.format(".01f")(oldData[i].values[sliderYear+4].volume * sliderData[i].values[0].y2030)});


			myTransition();
		}

		// var buttonRow = guidetextHolder.append('span').attr({
		// 	'id':'buttonRow'
		// })
		// .style({
		// 	// 'left':margin.left+'px',
  //           // 'right':margin.right+'px',
		// 	// 'top':((height-1*margin.bottom)*0.8)+(2000/height)+'px'
		// });

		buttonHolder.append('span').attr('id','resetButton').html('Reset').classed('introstate',true).on('click',function(){

            tweetData = [[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1]];
            generateResetData();
            moveSliders('restart');
            drawCurtains();
            setTimeout(function(){
                myTransition();
            },500);

			// d3.selectAll('.yearIndicator').classed({'disabled faded':true});
			// d3.select('.yearIndicator:nth-child(' + (sliderYear+7) + ')').classed({'disabled faded':false});

            yearLabelHolder.transition().duration(500).style({'left':x(2025)+'px'});
            yearLabel.html('2020-2030');
            yearLabelHolder.classed('introstate',false);

			d3.select('#toNext').classed('disabled',false);
			changetext(usertexts[0]);
			d3.selectAll('path.triangle').classed({'stop':false,'disabled':false});
			setTimeout(function(){
				d3.select('#toNext').classed('nudge',false);
			},50);
			setTimeout(function(){
				d3.select('#toNext').classed('nudge',false);
			},1150);
			d3.select('#resetButton').classed('introstate',true);
		});

    counter2 = buttonHolder.append('span').attr({"class":"slideCounter two"}).html((swipeIndex+1) + "/" + (guidetexts.length+1)).classed({'disabled':false,'introstate':true});

		buttonHolder.append('span').attr('id','toNext').html('Next &raquo;').classed({'disabled':false,'introstate':true}).on('click',function(){
			//tweetData[sliderYear] = JSON.parse(JSON.stringify(barData));
			toNextSliders();

            d3.select('#resetButton').classed('introstate',false);
			// d3.selectAll('.yearIndicator').classed({'disabled faded':true});
			// d3.select('.yearIndicator:nth-of-type(' + (sliderYear+7) + ')').classed({'disabled faded':false});
			
            yearLabelHolder.transition().duration(500).style({'left':x(d3.mean([sliderBands[sliderYear],sliderBands[sliderYear+1]]))+'px'});
            yearLabel.html(sliderBands[sliderYear] + '-' + sliderBands[sliderYear+1]);

            d3.select('#toNext').classed('nudge',false);
			d3.selectAll('path.triangle').classed('stop',false);
		});



        var veil = buttonHolder.append('span').attr({
            'class':'veil one'
        }).style({
        })
        .html('Create your own model')
        .on('click',function(){
            allowInteraction();
        });



        var veil2 = buttonHolder.append('span').attr({
            'class':'veil two'
        }).style({
            'display':'none'
        })
        .html('Back to narrative')
        .on('click',function(){
            startStory();
            setTimeout(function(){d3.select('#startStory').attr('id','animatebutton').on("click",swipeForward);},10);
        });



		// buttonHolder.append('span').attr({'class':'yearIndicator','id':'to2030'})
  //       .style({
  //           // 'left':x(2025) + 'px'
  //       }).classed({'introstate':false,'disabled':true}).on('click',function(){
		// 	refreshSeriesData();
		// 	drawCurtains();
		// 	moveSliders();
		// 	setTimeout(function(){
		// 		myTransition();
		// 	},500);
		// 	d3.select(this).classed('disabled introstate faded',true)
		// 	d3.select('#to2050').classed('disabled',false)
		// }).append('span')
  //       .html('2020-2030');

		// buttonHolder.append('span').attr({'class':'yearIndicator','id':'to2050'})
  //       .style({
  //           // 'left':x(2040) + 'px'
  //       }).classed('disabled',true).on('click',function(){
		// 	dynamicData = (JSON.parse(JSON.stringify(areasData)));
		// 	sliderYear = 1;
		// 	refreshSeriesData();
		// 	drawCurtains();
		// 	moveSliders();
		// 	setTimeout(function(){
		// 		myTransition();
		// 	},500);
		// 	d3.select(this).classed('disabled faded',true)
		// 	d3.select('#to2100').classed('disabled',false)
		// }).append('span')
  //       .html('2030-2050');

		// buttonHolder.append('span').attr({'class':'yearIndicator','id':'to2100'})
  //       .style({
  //           // 'left':x(2075) + 'px'
  //       }).classed('disabled',true).on('click',function(){
		// 	dynamicData = (JSON.parse(JSON.stringify(areasData)));
		// 	sliderYear = 2;
		// 	refreshSeriesData();
		// 	moveSliders();
		// 	drawCurtains();
		// 	setTimeout(function(){
		// 		myTransition();
		// 	},500);
		// 	d3.select(this).classed('disabled',true)
		// 	d3.select('#to2050').classed({'disabled faded':true})
		// }).append('span')
  //       .html('2050-2100');
		
    }   

    function generateResetData(){
                sliderYear = 0;
                barData = [];
                resetData.forEach(function(d,i){
                    var lo = sliderData[i].values[0].y2030;
                    var hi = sliderData[i].values[1].y2030;
                    var val = d.values.filter(function(d){return d.year == 2030})[0].volume;
                    scaledData = scaleData(lo,hi,val);
                    barData[i] = scaledData;

                    array2030[i] = (d.values.filter(function(d){return d.year == 2030})[0].volume)
                    array2050[i] = (d.values.filter(function(d){return d.year == 2050})[0].volume)
                    array2100[i] = (d.values.filter(function(d){return d.year == 2100})[0].volume)
                });

                areasData = (JSON.parse(JSON.stringify(resetData)));
                dynamicData = (JSON.parse(JSON.stringify(resetData)));;
                drawViz();
                setTimeout(function(){
                    drawData();
                },500)
                getCumulative();            
        } 

    function changetext(newguide){
      d3.select("#guidetext .innerText")
        .style("opacity",0)
      setTimeout(function(){
        d3.select("#guidetext .innerText").style("opacity",1).html(newguide);
        },500)
    }


    function writeTweet(){
		tweetSums = [];
    	tweetData[0].forEach(function(d,i){
    		thisVal = d3.sum([tweetData[0][i],tweetData[1][i],tweetData[2][i]])
    		tweetSums.push(thisVal)
    	});


    	var lowestCutter = d3.min(tweetSums);
    	var indexOfLowest = [];
    	tweetSums.forEach(function(d,i){
    		(d == lowestCutter) ? indexOfLowest.push(dynamicData[i].key):null;
    	});

    	var tweetCutter;
    	var tweetSuffix;
    	if(indexOfLowest.length <2 && indexOfLowest == 'RoW'){
    		tweetCutter = "the developing world";tweetSuffix =  "drives down";
    	}else if(indexOfLowest.length <2 && indexOfLowest != 'RoW'){
    		tweetCutter = indexOfLowest[0].replace(/EU/g,"the EU");tweetSuffix = "leads efforts to curb";
    	}else if(indexOfLowest.length >1 && 'RoW' in oc(indexOfLowest)){
    		tweetCutter = "international cooperation";tweetSuffix = "cuts";
    	}else {
    		tweetCutter = "major economies";tweetSuffix = "drive cuts in";
    	};

    	var tweetText;

    	if(tMax > 6){
    		tweetText = "In my scenario global inaction on CO2 emissions+means warming reaches " + d3.format(',.0f')(tMean) + "%C2%B0C by 2100";
    	}else if(tMax < 6){
    		tweetText = "In my scenario " + tweetCutter + "+" + tweetSuffix + " global CO2 emissions and warming peaks at " + d3.format(',.0f')(tMean) + "%C2%B0C by 2100";
    	}

    	tweetTextHTML = (("https://twitter.com/intent/tweet?text=" + tweetText + ". Try yours here&url=").replace(/ /g,"+").replace(/\s+(degrees)+\s/g,"&deg;") + ("http://ft.com/ig/sites/2015/climate-calculator/").replace(/:/g,"%3A").replace(/\//g,"%2F"));

    	shareMessage = (tweetText + ". Try yours here").replace(/ /g,"+");
    	shareURL = "http://ft.com/ig/sites/2015/climate-calculator/";

    	var shareIntents1 = ["https://twitter.com/intent/tweet?url=","http://www.facebook.com/sharer.php?u=","https://www.linkedin.com/shareArticle?mini=true&url=","http://reddit.com/submit?url=","http://www.pinterest.com/pin/create/button/?url=","https://plus.google.com/share?url= "];
		var shareIntents2 = ["&amp;text=","&amp;t=","&summary=","&amp;title=","&amp;description=",""];
		var shareIntents3 = ["","","+|+FT.com+|+Energy&amp;title=Model+the+climate+in+2100+with+our+global+emissions+calculator&amp;source=Financial+Times","","&amp;&media=http://www.ft.com/ig/sites/2015/climate-calculator/climatepromo.png?a",""];

    	d3.select("#guidetext .innerText").html("<span id='sharingMessage'><em>"+tweetText.replace(/scenario /g,"scenario <span class='userSet'>").replace(/\+/g,"</span> ").replace(/reaches /g,"reaches <span class='userSet'>").replace(/peaks at /g,"peaks at <span class='userSet'>").replace(/(%C2%B0)+(C)/g,"&#176;C</span>").replace(/2100/g,"2100</em></span><br><span id='shareSpan'>Share this message: <ul id='userShare'><li class='twitter'><a target='_blank' href=''><i></i></a></li><li class='facebook'><a target='_blank' href=''><i></i></a></li><li class='linkedin'><a target='_blank' href=''><i></i></a></li><li class='reddit'><a target='_blank' href=''><i></i></a></li><li class='pinterest'><a target='_blank' href=''><i></i></a></li><li class='googleplus'><a target='_blank' href=''><i></i></a></li></ul></span>"));
    		
    		d3.selectAll('#userShare a').attr({
    			'href':function(d,i){
                    if(i < 5){
    				    //console.log((shareIntents1[i] + shareURL + shareIntents2[i] + shareMessage + shareIntents3[i]))
    				    return (shareIntents1[i] + shareURL + shareIntents2[i] + shareMessage + shareIntents3[i])
                    }else{
                        //console.log((shareIntents1[i] + shareURL))
                        return (shareIntents1[i] + shareURL)
                    }
                }
    		})
    }


    function oc(a)
    {
      var o = {};
      for(var i=0;i<a.length;i++)
      {
        o[a[i]]='';
      }
      return o;
    }

    function wrap(text, width, lineHeight) {
              text.each(function() {
                var text = d3.select(this),
                    words = text.text().split(/\s+/).reverse(),
                    word,
                    line = [],
                    lineNumber = 0,
                    y = text.attr("y"),
                    dy = parseFloat(text.attr("dy"));
                    if(!lineHeight){lineHeight = 1.45}; // ems
                    if(!dy){dy = 0}else{dy = dy};
                    var tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
                while (word = words.pop()) {
                  line.push(word);
                  tspan.text(line.join(" "));
                  if (tspan.node().getComputedTextLength() > width) {
                    line.pop();
                    tspan.text(line.join(" "));
                    line = [word];
                    //console.log(line);
                    tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", lineHeight + dy + "em").text(word);
                  }
            }
      	});
    };

    function scaleData(min,max,val){
    	ephemeralScale = d3.scale.linear()
		  	.domain([min*val,max*val])
			.range([0,1])
		return ephemeralScale(val);
    }

    function unScaleData(min,max,val,sliderval){
    	ephemeralScale = d3.scale.linear()
		  	.domain([min*val,max*val])
			.range([0,1])
		return ephemeralScale.invert(sliderval);
    }

    function refreshSeriesData(){
	        dynamicData.forEach(function(d,i){
	        	var lo = sliderData[i].values[0]['y' + sliderYears[sliderYear]];
	            var hi = sliderData[i].values[1]['y' + sliderYears[sliderYear]];
	            var val = d.values.filter(function(d){return d.year == sliderYears[sliderYear]})[0].volume;
	            scaledData = scaleData(lo,hi,val);
	            barData[i] = scaledData;

	            array2030[i] = (d.values.filter(function(d){return d.year == 2030})[0].volume)
	            array2050[i] = (d.values.filter(function(d){return d.year == 2050})[0].volume)
	            array2100[i] = (d.values.filter(function(d){return d.year == 2100})[0].volume)
	        });
            //console.log('initial bar data',barData);
    	}

    	function moveSliders(direction){
    		var directionVar = (!direction) ? 1:-1;

            doProgressBar();

    		d3.selectAll('#sliderContainer,#slider')
				.transition()
				.duration(500)
				.attr({
				'transform':'translate(' + (-1*width) + ',0)'
			});

			setTimeout(function(){
				d3.selectAll('#sliderContainer,#slider').style('opacity','0')
	    		d3.selectAll('.refMarker')
	    		.attr({
	                'y1':function(d,i){
	                    return (sliderY(sliderData[i].values[2]['y' + sliderYears[sliderYear]]));},
	                'y2':function(d,i){ return (sliderY(sliderData[i].values[2]['y' + sliderYears[sliderYear]]));},
	                'display':function(d,i) {
	                	if(sliderData[i].values[2]['y' + sliderYears[sliderYear]] != 1){
	            			return 'block'}else{
	                		return 'none'
	                	}
	                }
				});
			},500);

			setTimeout(function(){
				d3.selectAll('#sliderContainer,#slider').attr({
				'transform':'translate(' + (directionVar*width) + ',0)'
			})
			.style('opacity','1')
			},600);

			setTimeout(function(){
				d3.selectAll('#sliderContainer,#slider')
				.transition()
				.duration(500)
				.attr({
				'transform':'translate(' + (margin.left) + ',0)'
				})
			},700);
    	}



		function getCumulative(draw){
			cumulativeArray = [3097.28];
			areasData.forEach(function(d){
				var d2020 = d.values[3].volume;
				var d2030 = d.values[4].volume;
				var d2050 = d.values[5].volume;
				var d2100 = d.values[6].volume;

				cumulativeArray.push(0.5*(d2020+d2030)*10);
				cumulativeArray.push(0.5*(d2030+d2050)*20);
				cumulativeArray.push(0.5*(d2050+d2100)*50);
			})
			cumulative = d3.sum(cumulativeArray);

            var df = (-0.0221456823027044)+(0.000221240660272301*(cumulative))+(-0.000000020237407308429*Math.pow((cumulative),2))+(0.000000000000601288*Math.pow((cumulative),3));

            var cu2 = cumulative*df;
			var extraCO2;
            var tx1 = 0.5+(4.5/8500)*cu2,
                tn1 = (2.5/9200)*cu2;
            var tm1 = (tx1+tn1)/2;

            var uix = tm1+(1.645*(tx1-tm1));
            var uin = tm1+(1.645*(tn1-tm1));
            var CH4 = (0.000297757893325233*cumulative)+(-0.0000000383350578971827*Math.pow(cumulative,2))+(0.000000000001841137*Math.pow(cumulative,3));
            var N2O = (0.000009)*cumulative + 0.19;
            var SO2 = -1.40946323625288+(0.000271190920958499*cumulative)+(-0.0000000222330108853683*Math.pow(cumulative,2));

            tMin = uin+CH4+N2O+SO2;
            tMax = uix+CH4+N2O+SO2;
            tMean = tm1;

			//console.log('cumulative emissions of ',cumulative,' are converted to ',extraCO2,' which gives a temperature range of ',tMin,' to ',tMax,' around a mean of ',tMean);

			if(draw){
			//console.log('initial')

			var rectUpper = svg.selectAll('rect.temp.upper').data([tMean])
			rectUpper.enter().append('rect').attr({
				'class':'temp upper',
				'x':(width-2.5*margin.right),
				'y':yTemp(tMax),
				'width':(1.5*margin.right),
				'height':yTemp(yTemp.domain()[1]-Math.abs(tMax-tMean))-yTemp(6.15),
				'rx':0,
				'ry':0
			})
			.style({
				'fill':'url(#grad1)',
				'shape-rendering':'crispEdges'
			});

			var rectLower = svg.selectAll('rect.temp.lower').data([tMean])
			rectLower.enter().append('rect').attr({
				'class':'temp lower',
				'x':(width-2.5*margin.right),
				'y':yTemp(tMean),
				'width':(1.5*margin.right),
				'height':yTemp(yTemp.domain()[1]-Math.abs(tMin-tMean))-yTemp(6.15),
				'rx':0,
				'ry':0
			})
			.style({
				'fill':'url(#grad2)',
				'shape-rendering':'crispEdges'
			});

			}else{
				//console.log('update')

				var rectUpper = svg.selectAll('rect.temp.upper')
				rectUpper.transition().duration(duration).attr({
					'x':(width-2.5*margin.right),
					'y':yTemp(tMax),
					'width':(1.5*margin.right),
					'height':yTemp(yTemp.domain()[1]-Math.abs(tMax-tMean))-yTemp(6.15),
					'rx':0,
					'ry':0
				})
				var rectLower = svg.selectAll('rect.temp.lower')
				rectLower.transition().duration(duration).attr({
					'x':(width-2.5*margin.right),
					'y':yTemp(tMean),
					'width':(1.5*margin.right),
					'height':yTemp(yTemp.domain()[1]-Math.abs(tMin-tMean))-yTemp(6.15),
					'rx':0,
					'ry':0
				})
			}

		};

      	var yTemp = d3.scale.linear()
        .range([height*0.5-margin.bottom-30,margin.top])
        .domain([1.85,6.15]);

      	var yAxisTemp = d3.svg.axis()
        .scale(yTemp)
        .orient("right")
        .ticks(5)
        .tickSize(-1.5*margin.right);

        var theyAxisTemp = svg.selectAll('g.y.axis.Temp').data([1]).enter().append('g')
            .attr({
                "transform": function(d){return 'translate(' + (width-margin.right)+',0)'},
                'class':'y axis Temp'
            })
            .call(yAxisTemp);





        function myTransition(sliderNum){
            if(!sliderNum){

			circles = d3.select('#slider').selectAll('rect.single')
				.data(barData);

            ups = d3.select('#slider').selectAll('path.triangle.up')
                .data(barData);
            downs = d3.select('#slider').selectAll('path.triangle.down')
                .data(barData);

            co2vals1 = d3.select('#slider').selectAll('text.co2val.top').data(barData);
            co2vals2 = d3.select('#slider').selectAll('text.co2val.base').data(barData);

			circles.transition()
                .ease("linear")
				.duration(50)
					.attr({
                        'x':function(d,i){return sliderX(i) + (plotWidth/10)*0.05;},
                        // 'x':function(d,i){return sliderX(i) + (((plotWidth/10)*0.525) - (xRect(oldData[i].values[sliderYear+4].volume/2)))},
                        'width':(plotWidth/10)*0.9,
                        // 'width':function(d,i){return xRect(oldData[i].values[sliderYear+4].volume)},
						'y':function(d,i){
                            var lo = sliderData[i].values[0]['y' + sliderYears[sliderYear]];
                            var hi = sliderData[i].values[1]['y' + sliderYears[sliderYear]];
                            var val = dynamicData[i].values.filter(function(d){return d.year == sliderYears[sliderYear]})[0].volume;
                            scaledData = scaleData(lo,hi,val);
                            //console.log('first',scaledData)
                            //console.log(sliderY(scaledData));
                            return (sliderY(scaledData));
                        },
                        'height':function(d,i){
                        	var lo = sliderData[i].values[0]['y' + sliderYears[sliderYear]];
                            var hi = sliderData[i].values[1]['y' + sliderYears[sliderYear]];
                            var val = dynamicData[i].values.filter(function(d){return d.year == sliderYears[sliderYear]})[0].volume;
                            scaledData = scaleData(lo,hi,val);
                        	return sliderY.range()[0]-sliderY(scaledData);
                        }
					});

            ups.transition()
                .ease("linear")
                .duration(50)
                    .attr({                        
                        'transform':function(d,i){
                        	var lo = sliderData[i].values[0]['y' + sliderYears[sliderYear]];
                            var hi = sliderData[i].values[1]['y' + sliderYears[sliderYear]];
                            var val = dynamicData[i].values.filter(function(d){return d.year == sliderYears[sliderYear]})[0].volume;
                            scaledData = scaleData(lo,hi,val);
                        	return 'translate(0,' + ((sliderY(scaledData)) + (-1*(arrowAdjust/2)))+')';
                        }
                    });
            downs.transition()
                .ease("linear")
                .duration(50)
                    .attr({                        
                        'transform':function(d,i){
                        	var lo = sliderData[i].values[0]['y' + sliderYears[sliderYear]];
                            var hi = sliderData[i].values[1]['y' + sliderYears[sliderYear]];
                            var val = dynamicData[i].values.filter(function(d){return d.year == sliderYears[sliderYear]})[0].volume;
                            scaledData = scaleData(lo,hi,val);
                        	return 'translate(0,' + ((sliderY(scaledData)) + (1*(arrowAdjust/2)))+')';
                        }
                    });





            // co2vals1.text(function(d,i){return d3.format(".01f")(oldData[i].values[sliderYear+4].volume)});

            // co2vals2.text(function(d,i){return d3.format(".01f")(oldData[i].values[sliderYear+4].volume * sliderData[i].values[0].y2030)});

            //console.log('drawn')
            }else{
            //console.log('shifted',barData)
            
            circles = d3.select('#slider').selectAll('rect.single')
                .data(barData);

            ups = d3.select('#slider').selectAll('path.triangle.up')
                .data(barData);
            downs = d3.select('#slider').selectAll('path.triangle.down')
                .data(barData);

            circles.transition()
                .ease("linear")
                .duration(duration)
                    .attr({
                        'y':function(d){
                            return (sliderY(d));},
                        'height':function(d){ return sliderY.range()[0]-sliderY(d);}
                    });

            ups.transition()
                .ease("linear")
                .duration(duration)
                    .attr({                        
                        'transform':function(d){ return 'translate(0,' + ((sliderY(d)) + (-1*(arrowAdjust/2)))+')';}
                    });
            downs.transition()
                .ease("linear")
                .duration(duration)
                    .attr({                        
                        'transform':function(d){ return 'translate(0,' + ((sliderY(d)) + (1*(arrowAdjust/2)))+')';}
                    });
            }
		}

        function makePatch(xScale, yScale, parent, callback){
			var parent = d3.select(parent);
			var xRange = sliderX.range(),
				yRange = sliderY.range();

            var container = parent.selectAll("#sliderContainer").data([dynamicData[0]]).attr("id","sliderContainer");
            container.enter().append("g").attr({
                "id":"sliderContainer",
                'transform':'translate('+margin.left+',0)'
            });
            container.exit().remove();

			if(!callback){
				var callback = function(x,y){
					//console.log(x,y);
				}
			}

			var drag = d3.behavior.drag()
				.origin(patch)
				.on("drag", function(d){
					d3.selectAll('path.triangle').classed('stop',true);
					d3.select('#resetButton').classed('introstate',false);d3.select('#to2030').classed('introstate disabled',false);
					var getSliderIndex = Math.floor(sliderX.invert(d3.mouse(this)[0]));
					var getSliderVal = sliderY.invert(d3.mouse(this)[1]);

				 	var lo = sliderData[getSliderIndex].values[0]['y' + sliderYears[sliderYear]];
                    var hi = sliderData[getSliderIndex].values[1]['y' + sliderYears[sliderYear]];
                    var val = dynamicData[getSliderIndex].values.filter(function(d){return d.year == sliderYears[sliderYear]})[0].volume;
                    unScaledData = unScaleData(lo,hi,val,getSliderVal);

					callback(Math.floor(sliderX.invert(d3.mouse(this)[0])), sliderY.invert(d3.mouse(this)[1]));
					getCumulative();
					tweetData[sliderYear] = JSON.parse(JSON.stringify(barData));
					// if(sliderYear == 2){
					// 	writeTweet();
					// 	drawCurtains('wide');
     //                    yearLabelHolder.classed('introstate',true);
					// };
					setTimeout(function(){
						d3.select('#toNext').classed('nudge',true);
					},1000);
                    //console.log('on',getSliderIndex,'this value is tracked',sliderY.invert(d3.mouse(this)[1]),'and turned into',unScaledData,'based on a domain of',hi,lo,'and an initial value of',val);
				})
        .on("dragend", function(d){
          if(sliderYear == 2){
          writeTweet();
          drawCurtains('wide');
            yearLabelHolder.classed('introstate',true);
          };
        });


            parent.selectAll("#sliderContainer").data([dynamicData[0]]).attr("id","sliderContainer");
            container.enter().append("g").attr({
                "id":"sliderContainer",
                'transform':'translate('+margin.left+',0)'
            });
            container.exit().remove();


			var patch = container.selectAll(".ui-patch slider_").data([dynamicData[0]])
                .attr('x', Math.min(xRange[0], xRange[1]) )
                .attr('y', Math.min(yRange[0], yRange[1]) )
                .attr('width', Math.abs(xRange[1] - xRange[0]))
                .attr('height', Math.abs(yRange[1] - yRange[0]))
                .attr('class',function(d,i){return 'ui-patch disabled slider_' + i})
                .on('click', function(d){
                    d3.selectAll('path.triangle').classed('stop',true);
                    d3.select('#resetButton').classed('introstate',false);d3.select('#to2030').classed('introstate disabled',false);
                    var getSliderIndex = Math.floor(sliderX.invert(d3.mouse(this)[0]));
                    var getSliderVal = sliderY.invert(d3.mouse(this)[1]);

                    var lo = sliderData[getSliderIndex].values[0]['y' + sliderYears[sliderYear]];
                    var hi = sliderData[getSliderIndex].values[1]['y' + sliderYears[sliderYear]];
                    var val = dynamicData[getSliderIndex].values.filter(function(d){return d.year == sliderYears[sliderYear]})[0].volume;
                    unScaledData = unScaleData(lo,hi,val,getSliderVal);

                    callback(Math.floor(sliderX.invert(d3.mouse(this)[0])), sliderY.invert(d3.mouse(this)[1]));
                    getCumulative();
                    tweetData[sliderYear] = JSON.parse(JSON.stringify(barData));
                    if(sliderYear == 2){
                        writeTweet();
                        drawCurtains('wide');
                    };
                    setTimeout(function(){
                        d3.select('#toNext').classed('nudge',true);
                    },500);

                    //console.log('on',getSliderIndex,'this value is tracked',sliderY.invert(d3.mouse(this)[1]),'and turned into',unScaledData,'based on a domain of',hi,lo,'and an initial value of',val);
                })
                .call(drag);

            patch.enter().append('rect')
                .attr('x', Math.min(xRange[0], xRange[1]) )
                .attr('y', Math.min(yRange[0], yRange[1]) )
                .attr('width', Math.abs(xRange[1] - xRange[0]))
                .attr('height', Math.abs(yRange[1] - yRange[0]))
                .attr('class',function(d,i){return 'ui-patch disabled slider_' + i})
                .on('click', function(d){
                    d3.selectAll('path.triangle').classed('stop',true);
                    d3.select('#resetButton').classed('introstate',false);d3.select('#to2030').classed('introstate disabled',false);
                    var getSliderIndex = Math.floor(sliderX.invert(d3.mouse(this)[0]));
                    var getSliderVal = sliderY.invert(d3.mouse(this)[1]);

                    var lo = sliderData[getSliderIndex].values[0]['y' + sliderYears[sliderYear]];
                    var hi = sliderData[getSliderIndex].values[1]['y' + sliderYears[sliderYear]];
                    var val = dynamicData[getSliderIndex].values.filter(function(d){return d.year == sliderYears[sliderYear]})[0].volume;
                    unScaledData = unScaleData(lo,hi,val,getSliderVal);

                    callback(Math.floor(sliderX.invert(d3.mouse(this)[0])), sliderY.invert(d3.mouse(this)[1]));
                    getCumulative();
                    tweetData[sliderYear] = JSON.parse(JSON.stringify(barData));
                    if(sliderYear == 2){
                        writeTweet();
                        drawCurtains('wide');
                        yearLabelHolder.classed('introstate',true);
                    };
                    setTimeout(function(){
                        d3.select('#toNext').classed('nudge',true);
                    },500);

                    //console.log('on',getSliderIndex,'this value is tracked',sliderY.invert(d3.mouse(this)[1]),'and turned into',unScaledData,'based on a domain of',hi,lo,'and an initial value of',val);
                })
                .call(drag);

            patch.exit().remove();
		}

		function callbackFn(index, percent){

        	var lo = sliderData[index].values[0]['y' + sliderYears[sliderYear]];
        	var hi = sliderData[index].values[1]['y' + sliderYears[sliderYear]];

        	var val1 = array2030[index];
        	var val2 = array2050[index];
        	var val3 = array2100[index];
        	var oldPts = [val1,val2,val3];

        	barData[Math.floor(index)] = percent;

    		refVal = unScaleData(lo,hi,oldPts[sliderYear],percent);

    		//console.log('important',refVal/eval('array' + sliderYears[sliderYear])[index]);

    		var relative = refVal/eval('array' + sliderYears[sliderYear])[index];

        	oldPts[sliderYear] = refVal;

        	areasData[index].values.filter(function(d){return d.year == sliderYears[sliderYear]})[0].volume = oldPts[sliderYear];

            for(j=sliderYear+1;j<3;j++){
	        	oldPts[j] = oldPts[j]*relative;

				areasData[index].values.filter(function(d){return d.year == sliderYears[j]})[0].volume = oldPts[j];
			}
			myTransition(index+1);
			drawViz();
			//console.log('moved',index,percent,oldPts[2]);
			//console.log('out with the old',array2030,barData);
		}

		//makePatch(sliderX, sliderY, '#thesvg', callbackFn);

		function preDraw(bars,values){
			duration = 1000;
			bars.forEach(function(d,i){
				makePatch(sliderX, sliderY, '#thesvg', callbackFn(bars[i],values[i]));
			})
			getCumulative();
			duration = 50;
			makePatch(sliderX, sliderY, '#thesvg', callbackFn);
		}

		function drawCurtains(wide){
			if(!wide){
				d3.selectAll('.curtains').style({
					'opacity':1
				})
				.transition().duration(500).attr({
					'width':x(sliderBands[sliderYear])-x(1990)
				})
				d3.select('.curtains.right').classed('wide',false).transition().duration(500).attr({
					'x':x(sliderBands[sliderYear+1]),
					'width':x(2100)-x(sliderBands[sliderYear+1])
				})
			}else{
				d3.select('.curtains.left').transition().duration(1000).style({
					'opacity':0
				})
			}
		}

        function rightCurtain(year1,year2,duration){
            d3.select('.curtains.left').style({
                'opacity':0
            });
            d3.select('.curtains.right').attr({
                'x':x(year1),
                'width':x(2100)-x(year1)
            }).classed('wide',true);
            d3.select('.curtains.right').transition().duration(duration).attr({
                'x':x(year2),
                'width':x(2100)-x(year2)
            })
        }

        function doClip(end,duration){
            clipRect.transition()
            //.ease('linear')
            .duration(duration).attr({
                'width':x(end)-x(1990)
            })
        }

        function toNextSliders(sliders){
            dynamicData = (JSON.parse(JSON.stringify(areasData)));

            if(!sliders){
                //console.log('empty')
                sliderYear = (sliderYear != 2) ? sliderYear+1:0;
            }else{
                sliderYear = +sliders;
            }

            refreshSeriesData();
            //console.log('SLIDERYEAR',sliderYear)
            changetext(usertexts[sliderYear]);
            setTimeout(function(d){     
                drawCurtains();     
                if(sliderYear == 0){
                    moveSliders('a');
                }else if(sliderYear == 2){
                    moveSliders();
                    d3.select('#toNext').classed('disabled',true);
                }else{
                    moveSliders();
                }
            },10)
            setTimeout(function(){
                myTransition();
            },500);
        }

        function resetAll(){
            tweetData = [[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1]];
            generateResetData();
            moveSliders('restart');
            drawCurtains();
            setTimeout(function(){
                myTransition();
            },500);
        }


        function allowInteraction(){
            d3.selectAll('#to2050,#to2100').classed('disabled',true);d3.select('#to2030').classed('disabled introstate',false);

            yearLabelHolder.classed('introstate',false);
            
            if(swipeIndex > 2){
                resetAll();
            }else{
                generateResetData();
            }

            swipeIndex = -1;

            storyState = 1;
            doProgressBar();

            changetext(usertexts[0]);

            d3.select('#toNext').classed('disabled introstate',false);
            d3.select('.slideCounter.two').classed('introstate',false);
            d3.selectAll('.ui-patch').classed('disabled',false);
            
            d3.selectAll('.veil.one,.backbutton,.animatebutton,.slideCounter.one').style('display','none');
            d3.selectAll('.veil.two,#resetButton,#toNext,.slideCounter.two').style('display','block');

            counter2.classed("blink",true);
            counter1.classed("blink",false);

            d3.selectAll('.triangle').classed('hidden',false);
            forBtn.attr('id','startStory').on('click',function(){
                startStory();
                setTimeout(function(){d3.select('#startStory').attr('id','animatebutton').on("click",swipeForward);},10);
            });

            backBtn.classed('hidden',true);
            
            doClip(2100,500);
            drawCurtains();
        }

        function backOne(){
            moveSliders('0');
            generateResetData();
            preDraw(d3.range(0,10,1),INDCs1);
            drawCurtains();
        }

        function backTwo(){
            moveSliders('1');
            generateResetData();
            myTransition();
            setTimeout(function(){
                sliderYear  = 0;
                preDraw(d3.range(0,10,1),INDCs1);
                sliderYear  = 1;
                dynamicData = (JSON.parse(JSON.stringify(areasData)));
                refreshSeriesData();
                setTimeout(function(){
                preDraw(d3.range(0,10,1),INDCs2);
                drawCurtains();
                },1000)
            },50);
        }

        function startStory(){
            storyState = 0;
            doProgressBar();

            d3.selectAll('.yearIndicator').classed({'disabled':true,'faded':false})
            yearLabelHolder.classed('introstate',true);

            swipeIndex = (guidetexts.length)-1;
            swipeForward();
            d3.selectAll('.triangle').classed('hidden',true);
            d3.select('#toNext').classed('disabled',true);
            d3.selectAll('.ui-patch').classed('disabled',true);
            d3.selectAll('.veil.one,.backbutton,.animatebutton,.slideCounter.one').style('display','block');
            d3.selectAll('.veil.two,#resetButton,#toNext,.slideCounter.two').style('display','none');

            counter1.classed("blink",true);
            counter2.classed("blink",false);
        }

}
