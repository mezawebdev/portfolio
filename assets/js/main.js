(function(DOM, global) {

	'use strict';

	$(".project-gallery-wrapper").slick();

	var app = {
		page: "home",
		portfolioFilters: false,
		init: function() {
			this.cacheDOM();
			this.fixIOSSafariFooter();
			this.render();
		},
		cacheDOM: function() {
			this.app = $("#app");
			this.home = $("#home");
			this.portfolio = $("#portfolio");
			this.about = $("#about");
			this.contact = $("#contact");
			this.blog = $("#blog");
			this.appBackground = $("#app-background");
			this.project0 = $(".project-0");
			this.project1 = $(".project-1");
			this.project2 = $(".project-2");
			this.project3 = $(".project-3");
			this.project4 = $(".project-4");
		},
		render: function() {
			/*this.app.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", () => {
				switch (navbar.style) {
					case "black":
						navbar.inversify("white");
						break;
					case "white":
						navbar.inversify("black");
						break;
				}
			});*/
			this.appBackground.flexBackground({
				numberOfPoints: "500",
				radius: "3",
				interval: "60",
				color: "rgb(250, 250, 250)"
			});

			var granimInstance = new Granim({
			    element: '#granim',
			    direction: 'top-bottom',
			    opacity: [0, 0.2, 0],
			    states : {
			        "default-state": {
			            gradients: [
			                ['#00ffe3', '#00fff5', '#9bf4f3'],
			                ['#dc1a2c', '#d32c3f', '#f43741'],
			                ['#eb1c00', '#0019eb', '#00f404'],
			                ['#0fdc00', '#00be05', '#6bf459'],
			                ['#FF512F', '#DD2476', '#F45C43'],
			                ['#DA22FF', '#9733EE', '#F45C43']
			            ],
			            transitionSpeed: 10000
			        }
			    }
			});
		},
		switchPage: function(destination) {
			switch (destination) {
				case "home":
					this.app.removeClass();
					this.app.toggleClass("home");
					this.page = "home";
					break;
				case "portfolio":
					this.app.removeClass();
					this.app.toggleClass("portfolio");
					this.page = "portfolio";
					break;
				case "about": 
					this.app.removeClass();
					this.app.toggleClass("about");
					this.page = "about";
					break;
				case "reviews":
					this.app.removeClass();
					this.app.toggleClass("reviews");
					this.page = "reviews";
					break;
				case "contact":
					this.app.removeClass();
					this.app.toggleClass("contact");
					this.page = "contact";
					break;
			}
		},
		openProject: function(project) {
			console.log(project);
			switch (project) {
				case 0:
					app.unactifyProjects();
					app.project0.css("display", "block");
				break;
				case 1:
					app.unactifyProjects();
					app.project1.css("display", "block");
				break;
				case 2: 
					app.unactifyProjects();
					app.project2.css("display", "block");
				break;
				case 3: 
					app.unactifyProjects();
					app.project3.css("display", "block");
				break;
				case 4: 
					app.unactifyProjects();
					app.project4.css("display", "block");
				break;
			}
			iWindow.open(project);
		},
		fixIOSSafariFooter: function() {
			var ua = window.navigator.userAgent;
			var iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
			var webkit = !!ua.match(/WebKit/i);
			var iOSSafari = iOS && webkit && !ua.match(/CriOS/i);

			if (iOSSafari) {
				$(".app-screen.home-wrapper .footer").css("bottom", "75px");
			}
		},
		unactifyProjects: function() {
			this.project0.css("display", "none");
			this.project1.css("display", "none");
			this.project2.css("display", "none");
			this.project3.css("display", "none");
			this.project4.css("display", "none");
		},
		goToApp: function(id) {
			switch (id) {
				case 0:
					window.location.href = "http://pipinstall.com/website";
				break;
				case 1:
					window.location.href = "http://alexmeza.me/sd-home-finder";
				break;
				case 2:
					window.location.href = "http://alexmeza.me/zen-vegan";
				break
				case 3:
					window.location.href = "http://adamfloresdesign.com/";
				break
				case 4:
					window.location.href = "http://alexmeza.me/sacred-geometry";
				break
			}
		}
	}

	var navbar = {
		style: "black",
		layout: "main",
		headerBackground: false,
		init: function() {
			this.cacheDOM();
			this.render();
		},
		cacheDOM: function() {
			this.navigationWrapper = $(".nav-wrapper");
			this.navigation = $(".navigation");
			this.subheader = $(".subheader");
			this.homeBtn = $("#home-btn");
			this.portfolioBtn = $("#portfolio-btn");
			this.aboutBtn = $("#about-btn");
			this.reviewsBtn = $("#reviews-btn");
			this.contactBtn = $("#contact-btn");
			this.titleWrapper = $(".title-wrapper");
			this.headerBackground = $(".header-background");
			this.social = $(".social");
		},
		render: function() {
			this.homeBtn.on("click", () => {
				app.switchPage("home");
				this.switchActive("home");
				this.switchLayout("main");
				this.toggleHeaderBackground(false);
			});	

			this.portfolioBtn.on("click", () => {
				app.switchPage("portfolio");
				this.switchActive("portfolio");
				this.switchLayout("secondary");
				this.toggleHeaderBackground(true);
			});	

			this.aboutBtn.on("click", () => {
				app.switchPage("about");
				this.switchActive("about");
				this.switchLayout("secondary");
				this.toggleHeaderBackground(true);
			});	

			this.reviewsBtn.on("click", () => {
				app.switchPage("reviews");
				this.switchActive("reviews");
				this.switchLayout("secondary");
				this.toggleHeaderBackground(true);
			});	

			this.contactBtn.on("click", () => {
				app.switchPage("contact");
				this.switchActive("contact");
				this.switchLayout("secondary");
				this.toggleHeaderBackground(true);
			});	
		},
		switchActive: function(active) {
			switch (active) {
				case "home":
					this.unactify();
					this.homeBtn.toggleClass("active");
					break;
				case "portfolio":
					this.unactify();
					this.portfolioBtn.toggleClass("active");
					break;
				case "about": 
					this.unactify();
					this.aboutBtn.toggleClass("active");
					break;
				case "reviews":
					this.unactify();
					this.reviewsBtn.toggleClass("active");
					break;
				case "contact":
					this.unactify();
					this.contactBtn.toggleClass("active");
					break;
			}
		},
		unactify: function() {
			this.homeBtn.removeClass();
			this.portfolioBtn.removeClass();
			this.aboutBtn.removeClass();
			this.reviewsBtn.removeClass();
			this.contactBtn.removeClass();
		},
		switchLayout: function(layout) {
			switch (layout) {
				case "main":
					this.navigationWrapper.removeClass("secondary");
					this.titleWrapper.removeClass("secondary");
					this.subheader.removeClass("closed");
					this.social.removeClass("closed");
					this.layout = "main";
					break;
				case "secondary":
					this.navigationWrapper.addClass("secondary");
					this.titleWrapper.addClass("secondary");
					this.subheader.addClass("closed");
					this.social.addClass("closed");
					this.layout = "secondary";
					break;
			}
		},
		inversify: function(color) {
			switch (color) {
				case "black":
					this.style = "black";
					this.headerBackground.removeClass("white");
					this.headerBackground.addClass("black");
					break;
				case "white":
					this.style = "white";
					this.headerBackground.removeClass("black");
					this.headerBackground.addClass("white");
					break;
			}
		},
		toggleHeaderBackground: function(active) {
			if (active) {
				this.headerBackground.addClass("active");
			} else { 
				this.headerBackground.removeClass("active");
			}
		}
	}

	var iWindow = {
		active: false,
		init: function() {
			this.cacheDOM();
			this.render();
		},
		cacheDOM: function() {
			this.wrapper = $("#iWindow");
			this.closeButton = $("#iWindow .exit");
		},
		render: function() {
			this.closeButton.on("click", () => {
				this.wrapper.removeClass("active");
			});
		},
		open: function(project) {
			this.wrapper.addClass("active");
		}
	}

	var portfolio = {
		htmlEnabled: true,
		cssEnabled: true,
		javascriptEnabled: true,
		jqueryEnabled: true,
		bootstrapEnabled: true,
		sassEnabled: true,
		wordpressEnabled: true,
		gitEnabled: true,
		phpEnabled: true,
		mysqlEnabled: true,
		projectsAmount: 9,
		rowsAmount: null,
		rows: [],
		projects: [],
		displayedProjects: [],
		init: function() {
			this.cacheDOM();
			this.fireEvents();
			this.render();
		},
		cacheDOM: function() {
			this.portfolioFilterButton = $(".filter");
			this.portfolioFilterButtonIcon = $(".filter span");
			this.portfolioFiltersWrapper = $(".filters-wrapper");
			this.filtersList = $(".filters-list");
			this.projectsList = $(".web-applications-wrapper");
			this.projectTemplate = $(".project-template").html();
			this.loader = $(".loader");
			this.html = $(".tech-0");
			this.css = $(".tech-1");
			this.javascript = $(".tech-2");
			this.jquery = $(".tech-3");
			this.bootstrap = $(".tech-4");
			this.sass = $(".tech-5");
			this.wordpress = $(".tech-6");
			this.git = $(".tech-7");
			this.php = $(".tech-8");
			this.mysql = $(".tech-9");

		},
		fireEvents: function() {
			this.portfolioFilterButton.on("click", () => {
				if (! this.portfolioFilters) {
					this.portfolioFiltersWrapper.addClass("active");
					this.portfolioFilterButtonIcon.removeClass();
					this.portfolioFilterButtonIcon.addClass("glyphicon glyphicon-chevron-up");
					this.portfolioFilters = true;
				} else {
					this.portfolioFiltersWrapper.removeClass("active");
					this.portfolioFilterButtonIcon.removeClass();
					this.portfolioFilterButtonIcon.addClass("glyphicon glyphicon-chevron-down");
					this.portfolioFilters = false;
				}
			});

			// Filter Buttons
			this.html.on("click", () => {
				if (this.htmlEnabled) {
					this.html.removeClass("active");
					this.htmlEnabled = false;
					this.render();
				} else {
					this.html.addClass("active");
					this.htmlEnabled = true;
					this.render();
				}
			});

			this.css.on("click", () => {
				if (this.cssEnabled) {
					this.css.removeClass("active");
					this.cssEnabled = false;
					this.render();
				} else {
					this.css.addClass("active");
					this.cssEnabled = true;
					this.render();
				}
			});

			this.javascript.on("click", () => {
				if (this.javascriptEnabled) {
					this.javascript.removeClass("active");
					this.javascriptEnabled = false;
					this.render();
				} else {
					this.javascript.addClass("active");
					this.javascriptEnabled = true;
					this.render();
				}
			});

			this.jquery.on("click", () => {
				if (this.jqueryEnabled) {
					this.jquery.removeClass("active");
					this.jqueryEnabled = false;
					this.render();
				} else {
					this.jquery.addClass("active");
					this.jqueryEnabled = true;
					this.render();
				}
			});

			this.bootstrap.on("click", () => {
				if (this.bootstrapEnabled) {
					this.bootstrap.removeClass("active");
					this.bootstrapEnabled = false;
					this.render();
				} else {
					this.bootstrap.addClass("active");
					this.bootstrapEnabled = true;
					this.render();
				}
			});

			this.sass.on("click", () => {
				if (this.sassEnabled) {
					this.sass.removeClass("active");
					this.sassEnabled = false;
					this.render();
				} else {
					this.sass.addClass("active");
					this.sassEnabled = true;
					this.render();
				}
			});

			this.wordpress.on("click", () => {
				if (this.wordpressEnabled) {
					this.wordpress.removeClass("active");
					this.wordpressEnabled = false;
					this.render();
				} else {
					this.wordpress.addClass("active");
					this.wordpressEnabled = true;
					this.render();
				}
			});

			this.git.on("click", () => {
				if (this.gitEnabled) {
					this.git.removeClass("active");
					this.gitEnabled = false;
					this.render();
				} else {
					this.git.addClass("active");
					this.gitEnabled = true;
					this.render();
				}
			});

			this.php.on("click", () => {
				if (this.phpEnabled) {
					this.php.removeClass("active");
					this.phpEnabled = false;
					this.render();
				} else {
					this.php.addClass("active");
					this.phpEnabled = true;
					this.render();
				}
			});

			this.mysql.on("click", () => {
				if (this.mysqlEnabled) {
					this.mysql.removeClass("active");
					this.mysqlEnabled = false;
					this.render();
				} else {
					this.mysql.addClass("active");
					this.mysqlEnabled = true;
					this.render();
				}
			});
		},
		render: function() {
			// Toggle Loader
			this.loader.addClass("active");

			// Empty out Rows and Projects
			this.rows = [];
			this.projects = [];
			this.rowsAmount = 0;
			this.displayedProjects = [];

			/*
			this.projectsList.css("display", "none");
			this.fetchList();
			this.projectsList.css("display", "block");
			portfolioScroll.update();*/
		},
		fetchList: function() {
			$.ajax({
				url: "assets/js/projects.json",
				type: "POST",
				dataType: "json",
				success: (data) => {
					this.sortList(data);
					this.appendProjects();
				},
				error: function() {
					alert("Couldn't not fetch projects.");
				}
			});
		},
		sortList: function(data) {
			for (var i = 0; i < data.length; i++) {
				if (data[i].tech.some((tch) => {
					return tch === "html5" && this.htmlEnabled;
				}) || data[i].tech.some((tch) => {
					return tch === "css3" && this.cssEnabled;	
				}) || data[i].tech.some((tch) => {
					return tch === "javascript" && this.javascriptEnabled;
				}) || data[i].tech.some((tch) => {
					return tch === "jquery" && this.jqueryEnabled;
				}) || data[i].tech.some((tch) => {
					return tch === "bootstrap" && this.bootstrapEnabled;
				}) || data[i].tech.some((tch) => {
					return tch === "sass" && this.sassEnabled;
				}) || data[i].tech.some((tch) => {
					return tch === "wordpress" && this.wordpressEnabled;
				}) || data[i].tech.some((tch) => {
					return tch === "git" && this.gitEnabled;	
				}) || data[i].tech.some((tch) => {
					return tch === "php" && this.phpEnabled;
				}) || data[i].tech.some((tch) => {
					return tch === "mysql" && this.mysqlEnabled;	
				})) {
					this.displayedProjects.push(data[i]);
				}
			}
		},
		appendProjects: function(project) {
			this.rowsAmount = Math.ceil(this.displayedProjects.length / 3);

			this.projectsList.html("");
			for (var i = 0; i < this.rowsAmount; i++) {
				this.projectsList.append("<div class='row' id='project-row-" + i + "'><div class='col-sm-4 margin-bottom'></div><div class='col-sm-4 margin-bottom'></div><div class='col-sm-4 margin-bottom'></div></div><div class='gap'></div>");
				this.rows.push($("#project-row-" + i));
			}

			var rowCounter = 0;
			var colCounter = 1;

			for (var i = 0; i < this.displayedProjects.length; i++) {
				if (colCounter > 3) {
					rowCounter++;
					colCounter = 0;
					$(".web-applications-wrapper #project-row-" + rowCounter + " .col-sm-4:nth-child(" + colCounter + ")").append(this.projectTemplate);
					this.displayedProjects[i].element = ($(".web-applications-wrapper #project-row-" + rowCounter + " .col-sm-4:last-child"));
				} else {
					$(".web-applications-wrapper #project-row-" + rowCounter + " .col-sm-4:nth-child(" + colCounter + ")").append(this.projectTemplate);
					this.displayedProjects[i].element = ($(".web-applications-wrapper #project-row-" + rowCounter + " .col-sm-4:last-child"));
					colCounter++;
				}
			}

			if (this.displayedProjects.length === 0) {
				this.projectsList.addClass("empty");
			} else {
				this.projectsList.removeClass("empty");
			}

			/*
			this.displayedProjects.forEach((project) => {
				if (counter === 2) {
					counter = 0;
				} else {
					counter++;
				}
			});*/

			this.loader.removeClass("active");
		}
	}


	// Shit code. Need fix.
	$(".brands-carousel").slick({
		autoplay: true,
		autoplaySpeed: 1000 
	});


	global.toggleWindow = app.openProject;
	global.goToApp = app.goToApp;

	// Perfect Scrolling
	const portfolioScroll = new PerfectScrollbar("#portfolio");
	const aboutScroll = new PerfectScrollbar("#about");
	const contactScroll = new PerfectScrollbar("#contact");
	const blogScroll = new PerfectScrollbar("#blog");
	const iWindowScroll = new PerfectScrollbar("#iWindow");

	$(window).ready(function() {
		setTimeout(function() {
			$(".alex-meza").addClass("animated fadeInDown");
		}, 500);
	});

	// Drivers
	app.init();
	navbar.init();
	iWindow.init();
	//portfolio.init();

}(document, window));