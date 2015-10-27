function flatpack(selection){

    var titletexts = ["气候变化计算器","","","","","","","","",""];

    var dw = Math.floor(window.innerWidth);

       var guidetexts = dw >= 600 ? ["自2月份以来，世界各国纷纷公布各自的温室气体(GHG)减排计划。12月份，联合国(UN)在巴黎召开会议，旨在达成一份新的气候变化协议……",
       "如果每个国家都按目前速度向环境排放温室气体至2100年，那么届时地球气温将平均升高至多6摄氏度，造就一种迥然不同的气候……",
       "各国的减排承诺主要覆盖<span class='boldText'>2020年至2030年期间</span>。我们看看，如果所有这些承诺都兑现的话，会发生什么结果……",
       "多数国家已公布了减排计划，但一些排放大国承诺的减排力度最小，全球而言，当前的承诺不足以使截至2100年的升温幅度限制在2摄氏度这个公认上限内。2030年后会发生什么？",
       "预定在12月达成的巴黎协议，应会确保各国提高承诺的减排量。有些国家已设定了<span class='boldText'>2030年至2050年</span>的目标，我们可以对其他国家做出估计……",
       "这些长远计划更为雄心勃勃，如果各国兑现承诺，那么排放增速可能会大幅降低。但是，仍存在2050年至2100年期间会发生什么的问题……",
       "即便每个国家都兑现了迄今的承诺，我们仍将看到排放和气温升高。那么，如果排放大国在<span class='boldText'>2050年后</span>成功减排温室气体，那会发生什么？",
       "如果2050年之后，中国、美国、欧盟和印度都大幅减排，那将起到很大的作用，但全球升温幅度仍将超过2摄氏度。如果这4个经济体放松了努力，把行动责任推给其他国家，那又会怎样？",
       "正如我们可以看到的那样，接下来五个排放大国即使付出协调努力，能起到的作用也将小得多。没有排放量最大的经济体的承诺，这场战斗可能会失败","",""]
    :
    ["自2月份以来，世界各国纷纷公布各自的温室气体(GHG)减排计划。12月份，联合国(UN)在巴黎召开会议，旨在达成一份新的气候变化协议……",
    "如果每个国家都按目前速度向环境排放温室气体至2100年，那么届时地球气温将平均升高至多6摄氏度，造就一种迥然不同的气候……",
    "各国的减排承诺主要覆盖<span class='boldText'>2020年至2030年期间</span>。我们看看，如果所有这些承诺都兑现的话，会发生什么结果……",
    "多数国家已公布了减排计划，但一些排放大国承诺的减排力度最小，全球而言，当前的承诺不足以使截至2100年的升温幅度限制在2摄氏度这个公认上限内。2030年后会发生什么？",
    "预定在12月达成的巴黎协议，应会确保各国提高承诺的减排量。有些国家已设定了<span class='boldText'>2030年至2050年</span>的目标，我们可以对其他国家做出估计……",
    "这些长远计划更为雄心勃勃，如果各国兑现承诺，那么排放增速可能会大幅降低。但是，仍存在2050年至2100年期间会发生什么的问题……",
    "即便每个国家都兑现了迄今的承诺，我们仍将看到排放和气温升高。那么，如果排放大国在<span class='boldText'>2050年后</span>成功减排温室气体，那会发生什么？",
    "如果2050年之后，中国、美国、欧盟和印度都大幅减排，那将起到很大的作用，但全球升温幅度仍将超过2摄氏度。如果这4个经济体放松了努力，把行动责任推给其他国家，那又会怎样？",
    "正如我们可以看到的那样，接下来五个排放大国即使付出协调努力，能起到的作用也将小得多。没有排放量最大的经济体的承诺，这场战斗可能会失败","",""];

    var usertexts = ["现在轮到你了。调整以下长条图，为各个国家设定减排雄心，先从2020年至2030年期间开始。然后进入下一步……",
    "现在针对2030年至2050年期间重复前一步，看看中期雄心的影响有多大。接着进入最后一步，针对2050年至2100年期间……",
    "最后，设定本世纪下半叶的目标。完成之后，你就可以考察和分享自己的独特结果了。"];
    var animations = [
      function() {backBtn.classed('hidden',true);},
      function() {doClip(2100,2000);backBtn.classed('hidden',false);},
      function() {drawCurtains();d3.select('#to2030').classed('disabled introstate',false);yearLabelHolder.classed('introstate',false);},
      function() {preDraw(d3.range(0,10,1),INDCs1);},
      function() {toNextSliders('1');d3.select('#to2030').classed('disabled',true);yearLabelHolder.transition().duration(500).style({'left':x(2040)+'px'});yearLabel.html('2030年至2050年');},
      function() {preDraw(d3.range(0,10,1),INDCs2);},
      function() {toNextSliders('2');d3.select('#to2050').classed('disabled',true);yearLabelHolder.transition().duration(500).style({'left':x(2075)+'px'});yearLabel.html('2050年至2100年');},
      function() {preDraw(d3.range(0,10,1),[0,0,0,0,1,1,1,1,1,1]);},
      function() {preDraw(d3.range(0,10,1),[1,1,1,1,0,0,0,0,0,1]);},
      function() {allowInteraction();d3.select('#to2100').classed('disabled',true);yearLabelHolder.transition().duration(500).style({'left':x(2025)+'px'});yearLabel.html('2020年至2030年');},
      function() {resetAll();swipeIndex = 0;doClip(2012,500);backBtn.classed('hidden',true);d3.selectAll('.curtains').style('opacity',0);}
      ];

    var backAnimations = [
      function() {backBtn.classed('hidden',true);doClip(2012,2000);},
      function() {backBtn.classed('hidden',false);doClip(2100,2000);d3.selectAll('.curtains').style('opacity',0);},
      function() {drawCurtains();preDraw(d3.range(0,10,1),[1,1,1,1,1,1,1,1,1,1]);},
      function() {backOne();yearLabelHolder.transition().duration(500).style({'left':x(2025)+'px'});yearLabel.html('2020年至2030年');loseEst();},
      function() {drawCurtains();preDraw(d3.range(0,10,1),[1,1,1,1,1,1,1,1,1,1]);},
      function() {backTwo();yearLabelHolder.transition().duration(2000).style({'left':x(2040)+'px'});yearLabel.html('2030年至2050年');addEst();},
      function() {preDraw(d3.range(0,10,1),[1,1,1,1,1,1,1,1,1,1]);},
      function() {preDraw(d3.range(0,10,1),[0,0,0,0,1,1,1,1,1,1]);},
      function() {preDraw(d3.range(0,10,1),[1,1,1,1,0,0,0,0,0,1]);},
      function() {backBtn.classed('hidden',true);}
      ];

    var orient = window.orientation;
    
    var width = Math.floor(window.innerHeight*.9), height = Math.floor(window.innerHeight)-5;
    if(width > Math.floor(selection.node().clientWidth))width = Math.floor(selection.node().clientWidth);

    var barWidth = Math.floor(d3.select('#interactive').node().clientWidth);

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

    var sections = sectionsHolder.selectAll('section.textBox')
        .data(d3.range(0,guidetexts.length,1)).enter()
        .append('section')
        .attr({
            'class':'textBox'
        })
        .html(function(d){return guidetexts[d]});

    var sectionHeights = [];
    sections.each(function(){return sectionHeights.push(d3.select(this).node().clientHeight)});
    var maxSectionHeight = d3.max(sectionHeights);
    var titleHeight = slidetext.node().getBoundingClientRect().bottom-slidetext.node().getBoundingClientRect().top;
    var heightOffset = maxSectionHeight + (dw >= 600 ? 20:10);

    var storyState = 0;

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
  	};

    var drawData = function(){
    };

    var height = Math.floor(window.innerHeight-heightOffset)-5,
    tempWidth = height*.9;
    if(width > Math.floor(window.innerWidth))width = Math.floor(window.innerWidth);
    if(width < 800){height = tempWidth*1.1}else{height = Math.floor(window.innerHeight-heightOffset)-50};
    var stackColumnWidth = 240;
    if(width > 800){stackColumnWidth = 510}else if(width > 500){stackColumnWidth = 400};
    
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    }

    height = d3.max([(height-heightOffset)+15,(420-heightOffset)]);

    var pauseLength = 750;
    var transitionsOnOff = 'off';
    if(window.innerWidth > 800)transitionsOnOff = 'on';
    if(window.innerWidth < 800)duration = 0;
    if(window.innerWidth < 800)pauseLength = 250;

    function doProgressBar(){
      
      storyState == 0 ? counter1.html((swipeIndex+1) + "/" + (guidetexts.length-1)):counter2.html((sliderYear+1) + "/" + (3));
    };

    var lookup = {},
      margin = { top:40, left:30, bottom:25, right:30 ,temp:25},
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
      if(swipeIndex == 0){
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
        containerStart = d3.select('#vis').node().getBoundingClientRect().top + window.pageYOffset;
    };

    function scrollPosition() {
        var pos = window.pageYOffset - 10;
        sectionIndex = d3.bisect(sectionPositions, pos);
        sectionIndex = Math.min(sections.size() - 1, sectionIndex);

        if (currentIndex !== sectionIndex) {
          changetext(titletexts[sectionIndex],guidetexts[sectionIndex]);
          animations[sectionIndex]();
          currentIndex = sectionIndex;
        }

        var prevIndex = Math.max(sectionIndex - 1, 0);
        var prevTop = sectionPositions[prevIndex];
        var progress = (pos - prevTop) / (sectionPositions[sectionIndex] - prevTop);
        
    };


    var buttonHolder = d3.select("#guidetext").append("span").attr("class","buttonHolder");
    var backBtn = d3.select(".buttonHolder").append("span").attr("class","backbutton hidden").html("&laquo; 往前");
    var counter1 = buttonHolder.append('span').attr({"class":"slideCounter one"}).html((swipeIndex+1) + "/" + (guidetexts.length+1));
    var forBtn = d3.select(".buttonHolder").append("span").attr("class","animatebutton").html("往后 &raquo;");

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
    }).html("年度温室气体排放量<br>(CO<sub>2</sub>e) 10亿吨");

    var axisTitleRight = titleHolder.append('p').attr({
        'class':'axisTitle right'
    }).html("2100年以前<br>全球气温变化中位数 (&deg;C)");

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

  var tempClip = defs.append('clipPath').attr('id','tempClip');

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

/*    var shareIntents1 = ["https://twitter.com/intent/tweet?url=","http://www.facebook.com/sharer.php?u=","https://www.linkedin.com/shareArticle?mini=true&url=","http://reddit.com/submit?url=","http://www.pinterest.com/pin/create/button/?url=","https://plus.google.com/share?url= "];
    var shareIntents2 = ["&amp;text=","&amp;t=","&summary=","&amp;title=","&amp;description=",""];
    var shareIntents3 = ["","","+|+FT.com+|+Energy&amp;title=Model+the+climate+in+2100+with+our+global+emissions+calculator&amp;source=Financial+Times","","&amp;&media=http://ig.ft.com/sites/climate-change-calculator/tw.png",""];*/

/*    d3.selectAll('.shareDiv.interactive a').attr({
        'href':function(d,i){
            if(i < 5){
                return (shareIntents1[i] + encodeURIComponent("http://ig.ft.com/sites/climate-change-calculator/#interactive") + shareIntents2[i] + ("Can you restrict global warming to the target of 2%C2%B0C by 2100? Find out with the Climate Change Calculator") + shareIntents3[i])
            }else{
                return (shareIntents1[i] + ("Can you restrict global warming to the target of 2%C2%B0C by 2100? Find out with the Climate Change Calculator"))
            }
        }
    });*/

/*    d3.selectAll('.shareDiv.story a').attr({
        'href':function(d,i){
            if(i < 5){
                return (shareIntents1[i] + encodeURIComponent("http://ig.ft.com/sites/climate-change-calculator/#story") + shareIntents2[i] + ("Businesses face patchwork of rules under Paris climate deal") + shareIntents3[i])
            }else{
                return (shareIntents1[i] + ("Businesses face patchwork of rules under Paris climate deal"))
            }
        }
    });*/

    queue()
      .defer(d3.csv, 'new.csv')
      .await(initialise); 

  	var x = d3.scale.linear()
    	.range([margin.left,(width-3.5*margin.temp)])
    	.domain([1990,2100]);

  	var y = d3.scale.linear()
    	.range([height*0.5-15,margin.top])
    	.domain([0,140]);

    var yearLabelHolder = buttonLayer.append('div')
    .attr({
        'class':'yearLabelHolder introstate'
    })
    .style({
        'left':x(2025) + 'px',
        'top':y(140) + 'px'
    });
    var yearLabel = yearLabelHolder.append('span').html('2020至2030年');

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
			.range([(height-margin.bottom),y.range()[0]+65 + (dw >= 600 ? 10:0)])
			.clamp(true);



    var xRect = d3.scale.linear()
            .domain([0, 70])
            .range([(plotWidth/10)*0.05, (plotWidth/10)*0.95]);



	var arrowAdjust = d3.max([Math.floor((sliderY.range()[0]-sliderY.range()[1])/25),5]);

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
      	linesData = data.filter(function(d){return d.key == '2DS' || d.key == '6DS'});
      	areasData = data.filter(function(d){return d.key !== '2DS' && d.key !== '6DS' && d.key !== 'World' && d.key !== 'Cumu'});
      	resetData = (JSON.parse(JSON.stringify(areasData)));
      	dynamicData = (JSON.parse(JSON.stringify(areasData)));
      	oldData = (JSON.parse(JSON.stringify(areasData)));;

      	var theKeys = [];
      	populateKeys = function(data){
      		data.forEach(function(d){return theKeys.push(d.key)})
      	};

        var z = d3.scale.ordinal()
        	.domain(theKeys)
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
        .tickSize(-1*(width-(margin.left+3.5*margin.temp)))
        .tickFormat(d3.format("d"));

        var theXAxis = svg.selectAll('g.xAxis').data([1]).enter().append('g')
            .attr({
                "transform": function(d){return 'translate(0,' + (height*0.5-15) + ')'},
                'class':'x axis'
            })
            .call(xAxis);

        d3.selectAll(".axis.x .tick text").attr({"y":width > 600 ? 7:5});

        svg.append("line").attr({
            class:'plotDivider',
            'x1':0,
            'x2':width,
            'y1':(height*0.5+10),
            'y2':(height*0.5+10)
        });

        var theyAxis = svg.selectAll('g.yAxis').data([1]).enter().append('g')
            .attr({
                "transform": function(d){return 'translate('+margin.left+',0)'},
                'class':'y axis'
            })
            .call(yAxis);

        var emissionsTitle = titleHolder.append('p').attr({
            'class':'axisTitle left'
        }).style({
            'top':((height*0.5-12)) + "px",
            "position":"absolute",
            "font-size":"0.9em"
        })
        .html("降低温室气体排放量的努力");

	    var sliderTopLabel = svg.append('text').attr({
		    	'class':'sliderLabel',
		    	'x':width-margin.right,
		    	'y':height*0.5+45
		    }).text('不做改变: 气温增幅注定会达到6\u00B0C ');

      var sta = svg.append("path").attr({
        class:'arrowPath',
        d:'M' + (width-margin.right+2) + ',' + (height*0.5+41) + 'l10,0l0,' + (sliderY.range()[1]-(height*0.5+41)) + 'l' + (-12-plotWidth/10*0.05) + ',0'
      });

	    var sliderBottomLabel = svg.append('text').attr({
		    	'class':'sliderLabel',
		    	'x':width-margin.right,
		    	'y':(height-margin.bottom)+(dw >= 600 ? 23:13)
		    })
        // .text('Cuts required to restrict rise to 2\u00B0C');
        .text('使升温幅度不超过典型浓度路径(RCP) 2.6情景之限度所需的减排量');

      var sba = svg.append("path").attr({
        class:'arrowPath',
        d:'M' + (width-margin.right+2) + ',' + ((height-margin.bottom)+(dw >= 600 ? 22:12)) + 'l10,0l0,' + ((dw >= 600 ? -22:-12)) + 'l' + (-12-plotWidth/10*0.05) + ',0'
      });

      var indcKey = svg.append('text').attr({
          'class':'sliderLabel left',
          'x':margin.left+23,
          'y':height*0.5+45
        }).text('各国承诺');

      var indcKeyLine = svg.append("line").attr({
        class:"indcKeyLine",
        "x1":margin.left,
        "x2":margin.left+20,
        "y1":height*0.5+41,
        "y2":height*0.5+41
      });

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
            .text(function(d){return "气温增幅不超过" + d.key.replace(/D/g," \u00B0C").replace(/S/g,"")});


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

    		var relative = refVal/eval('array' + sliderYears[sliderYear])[index];

        	oldPts[sliderYear] = refVal;

        	areasData[index].values.filter(function(d){return d.year == sliderYears[sliderYear]})[0].volume = oldPts[sliderYear];

            for(j=sliderYear+1;j<3;j++){
	        	oldPts[j] = oldPts[j]*relative;

				areasData[index].values.filter(function(d){return d.year == sliderYears[j]})[0].volume = oldPts[j];
			}
			myTransition(index+1);
			drawViz();
		});







		var mainLine, paleLine, chart, labels;

		drawData();

        vis.style({
            'min-height':vis.node().clientHeight+'px'
        })
        

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
                            return (sliderY.range()[1])},
                        'height':function(d){ return (sliderY.range()[0]-sliderY.range()[1])}
					});

			circles.enter()
				.append('rect')
					.attr({
                        'class':'single',
						'x':function(d,i){return sliderX(i) + (plotWidth/10)*0.05;},
                        'width':(plotWidth/10)*0.9,
                        'y':function(d){
                            return (sliderY(d));},
                        'height':function(d){ return sliderY.range()[0]-sliderY(d);},
                        'fill':function(d,i) {return z(i)}
					});

			circles.enter()
				.append('line')
					.attr({
                        'class':function(d,i){
                            return (sliderYear == 1 && sliderData[i].key in oc(["中国","印度","巴西","日本","澳大利亚","其他国家"])) ? 'refMarker est':'refMarker'},
						'x1':function(d,i){return sliderX(i) + (plotWidth/10)*0.05;},
                        'x2':function(d,i){return sliderX(i) + (plotWidth/10)*0.95;},
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

			myTransition();
		}

		buttonHolder.append('span').attr('id','resetButton').html('重新设定').classed('introstate',true).on('click',function(){

            tweetData = [[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1]];
            generateResetData();
            moveSliders('restart');
            drawCurtains();
            setTimeout(function(){
                myTransition();
            },500);

            d3.select("#userShare").classed("active",false);
            d3.select("#toNext").style({"display":"block"});

            yearLabelHolder.transition().duration(500).style({'left':x(2025)+'px'});
            yearLabel.html('2020至2030年');
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

		buttonHolder.append('span').attr('id','toNext').html('下一步 &raquo;').classed({'disabled':false,'introstate':true}).on('click',function(){
			toNextSliders();

            d3.select('#resetButton').classed('introstate',false);
			
            yearLabelHolder.transition().duration(500).style({'left':x(d3.mean([sliderBands[sliderYear],sliderBands[sliderYear+1]]))+'px'});
            yearLabel.html(sliderBands[sliderYear] + '-' + sliderBands[sliderYear+1]);

            d3.select('#toNext').classed('nudge',false);
			d3.selectAll('path.triangle').classed('stop',false);
		});

        buttonHolder.append('span').attr('id','shareSpan').html("<ul id='userShare'><li class='twitter'><a target='_blank' href=''><i></i></a></li><li class='facebook'><a target='_blank' href=''><i></i></a></li><li class='linkedin'><a target='_blank' href=''><i></i></a></li><li class='reddit'><a target='_blank' href=''><i></i></a></li><li class='pinterest'><a target='_blank' href=''><i></i></a></li><li class='googleplus'><a target='_blank' href=''><i></i></a></li></ul>");



        var veil = buttonHolder.append('span').attr({
            'class':'veil one'
        }).style({
        })
        .html('建立你的预测模型')
        .on('click',function(){
            allowInteraction();
        });



        var veil2 = buttonHolder.append('span').attr({
            'class':'veil two'
        }).style({
            'display':'none'
        })
        .html('回图表叙述')
        .on('click',function(){
            startStory();
            setTimeout(function(){d3.select('#startStory').attr('id','animatebutton').on("click",swipeForward);},10);
        });



		
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

    	if(tMax >= 5.95){
    		tweetText = "In my climate model global inaction on CO2 emissions means warming reaches 6%C2%B0C by 2100. Can you hit the 2%C2%B0C target?";
    	}else if(tMax < 5.95 && tMax >=4.5){
            tweetText = "In my climate model limited action on CO2 emissions means warming reaches " + d3.format(".1f")(tMax).replace(/.0/g,"") + "%C2%B0C by 2100. Can you hit the 2%C2%B0C target?";
    	}else if(tMax < 4.5 && tMax >=2.95){
            tweetText = "In my climate model global CO2 emissions fall but warming approaches " + d3.format(".1f")(tMax).replace(/.0/g,"") + "%C2%B0C by 2100. Can you hit the 2%C2%B0C target?";
        }else if(tMax < 2.95 && tMax > 2.85){
            tweetText = "In my model global CO2 emissions fall and there's a 50%25 chance warming is below 2%C2%B0C. Can you hit the 2%C2%B0C target too?";
        }else{
            tweetText = "In my model global CO2 emissions fall and there's a 66%25 chance warming is below 2%C2%B0C. Can you hit the 2%C2%B0C target too?"
        }

    	tweetTextHTML = (("https://twitter.com/intent/tweet?text=" + tweetText + ". Try yours here&url=").replace(/ /g,"+").replace(/\s+(degrees)+\s/g,"&deg;") + ("http://ft.com/ig/sites/climate-calculator/").replace(/:/g,"%3A").replace(/\//g,"%2F"));

    	shareMessage = (tweetText).replace(/ /g,"+");
    	shareURL = "http://ig.ft.com/sites/climate-change-calculator/";

    	d3.select("#guidetext .innerText").html("<span id='sharingMessage' class='blink'><em>&ldquo;"+tweetText.replace(/CO2/g,"CO<sub>2</sub>").replace(/%25/g," per cent").replace(/(%C2%B0)+(C)/g,"&#176;C").replace(/Can you hit the.*/g,"").replace(/2100./g,"2100&rdquo;</em></span><br><span class='twoem'>Share your results using the buttons below</span>").replace(/C\./g,"C&rdquo;</em></span><br><span class='twoem'>Share your results using the buttons below</span>"));

        d3.select("#toNext").style({"display":"none"});
        d3.select("#userShare").classed("active",true);
    		
    		d3.selectAll('#userShare a').attr({
    			'href':function(d,i){
                    if(i < 5){
    				    return (shareIntents1[i] + shareURL + shareIntents2[i] + shareMessage + shareIntents3[i])
                    }else{
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
                    if(!lineHeight){lineHeight = 1.45};
                    if(!dy){dy = 0}else{dy = dy};
                    var tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
                while (word = words.pop()) {
                  line.push(word);
                  tspan.text(line.join(" "));
                  if (tspan.node().getComputedTextLength() > width) {
                    line.pop();
                    tspan.text(line.join(" "));
                    line = [word];
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
                    'class':function(d,i){
                        return (sliderYear == 1 && sliderData[i].key in oc(["中国","印度","巴西","日本","澳大利亚","其他国家"])) ? 'refMarker est':'refMarker'},
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

			if(draw){

			var rectUpper = svg.selectAll('rect.temp.upper').data([tMean])
			rectUpper.enter().append('rect').attr({
				'class':'temp upper',
				'x':(width-2.5*margin.temp),
				'y':yTemp(tMax),
				'width':(1.5*margin.temp),
				'height':yTemp(yTemp.domain()[1]-Math.abs(tMax-tMean))-yTemp.range()[1],
				'rx':0,
				'ry':0
			})
			.style({
				'fill':'url(#grad1)',
				'shape-rendering':'crispEdges',
                'clip-path':'url(#tempClip)'
			});

			var rectLower = svg.selectAll('rect.temp.lower').data([tMean])
			rectLower.enter().append('rect').attr({
				'class':'temp lower',
				'x':(width-2.5*margin.temp),
				'y':yTemp(tMean),
				'width':(1.5*margin.temp),
				'height':yTemp(yTemp.domain()[1]-Math.abs(tMin-tMean))-yTemp.range()[1],
				'rx':0,
				'ry':0
			})
			.style({
				'fill':'url(#grad2)',
				'shape-rendering':'crispEdges',
                'clip-path':'url(#tempClip)'
			});

			}else{

				var rectUpper = svg.selectAll('rect.temp.upper')
				rectUpper.transition()
                .ease("linear").duration(duration).attr({
					'x':(width-2.5*margin.temp),
					'y':yTemp(tMax),
					'width':(1.5*margin.temp),
					'height':yTemp(yTemp.domain()[1]-Math.abs(tMax-tMean))-yTemp.range()[1],
					'rx':0,
					'ry':0
				})
				var rectLower = svg.selectAll('rect.temp.lower')
				rectLower.transition()
                .ease("linear").duration(duration).attr({
					'x':(width-2.5*margin.temp),
					'y':yTemp(tMean),
					'width':(1.5*margin.temp),
					'height':yTemp(yTemp.domain()[1]-Math.abs(tMin-tMean))-yTemp.range()[1],
					'rx':0,
					'ry':0
				})
			}

		};

      	var yTemp = d3.scale.linear()
        .range([y(4.48),y(135.33)])
        .domain([2,6]);

      	var yAxisTemp = d3.svg.axis()
        .scale(yTemp)
        .orient("right")
        .ticks(5)
        .tickSize(-1.5*margin.temp);

        var theyAxisTemp = svg.selectAll('g.y.axis.Temp').data([1]).enter().append('g')
            .attr({
                "transform": function(d){return 'translate(' + (width-margin.temp)+',0)'},
                'class':'y axis Temp'
            })
            .call(yAxisTemp);

    var tempClipRect = tempClip.append('rect').attr({
        'x':(width-2.5*margin.temp),
        'y':y(140),
        'width':(1.5*margin.temp),
        'height':(y(0)-y(140))+25
    });





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
                        'width':(plotWidth/10)*0.9,
						'y':function(d,i){
                            var lo = sliderData[i].values[0]['y' + sliderYears[sliderYear]];
                            var hi = sliderData[i].values[1]['y' + sliderYears[sliderYear]];
                            var val = dynamicData[i].values.filter(function(d){return d.year == sliderYears[sliderYear]})[0].volume;
                            scaledData = scaleData(lo,hi,val);
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


            }else{
            
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
					setTimeout(function(){
						d3.select('#toNext').classed('nudge',true);
					},1000);
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

    		var relative = refVal/eval('array' + sliderYears[sliderYear])[index];

        	oldPts[sliderYear] = refVal;

        	areasData[index].values.filter(function(d){return d.year == sliderYears[sliderYear]})[0].volume = oldPts[sliderYear];

            for(j=sliderYear+1;j<3;j++){
	        	oldPts[j] = oldPts[j]*relative;

				areasData[index].values.filter(function(d){return d.year == sliderYears[j]})[0].volume = oldPts[j];
			}
			myTransition(index+1);
			drawViz();
		}

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
            .duration(duration).attr({
                'width':x(end)-x(1990)
            })
        }

        function addEst(){
                var indcKeyT = d3.select(".sliderLabel.left").text('各国承诺 | 预测');

                var indcKeyLineEst = svg.append("line").attr({
                    class:"indcKeyLine est",
                    "x1":indcKeyT.node().offsetLeft+indcKeyT.node().offsetWidth+3,
                    "x2":indcKeyT.node().offsetLeft+indcKeyT.node().offsetWidth+23,
                    "y1":height*0.5+41,
                    "y2":height*0.5+41
                });
        }

        function loseEst(){
            d3.select(".sliderLabel.left").text('各国承诺');
            d3.select(".indcKeyLine.est").remove();
        }

        function toNextSliders(sliders){
            dynamicData = (JSON.parse(JSON.stringify(areasData)));

            if(!sliders){
                sliderYear = (sliderYear != 2) ? sliderYear+1:0;
            }else{
                sliderYear = +sliders;
            }

            if(sliderYear == 1){

                var indcKeyT = d3.select(".sliderLabel.left").text('各国承诺 | 预测');

                var indcKeyLineEst = svg.append("line").attr({
                    class:"indcKeyLine est",
                    "x1":indcKeyT.node().offsetLeft+indcKeyT.node().offsetWidth+3,
                    "x2":indcKeyT.node().offsetLeft+indcKeyT.node().offsetWidth+23,
                    "y1":height*0.5+41,
                    "y2":height*0.5+41
                });

            }else{
                d3.select(".sliderLabel.left").text('承诺');
                d3.select(".indcKeyLine.est").remove();
            }

            refreshSeriesData();
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
