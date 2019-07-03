function listTags(selector,tags){
	tags.map( tag =>{
		const tagList = "<li class='skill-tag' >"+tag+"</li>"
		$(selector).append(tagList);
	})
}

function pageChange(hash){
	if(hash===""){
		$(".page-view").hide();
		$("#introduction").show();
	}
	else {
		$(".page-view").hide();
		$(hash).show();
	}
	switch (hash) { 
		case '#introduction':
			$("body").css("background-color","#8c8c8c");
			break;
		case '#skill-tool': 
			$("body").css("background-color","#d9d9d9");
			break;
		case '#portfolio': 
			$("body").css("background-color","#bfbfbf");
			break;	
	}
	
}


function scrollFunction() {
  if ($('html').scrollTop() > 20 ) {
    $("#top-button").css("display","block")
  } else {
    $("#top-button").css("display","none")
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  $('html').scrollTop(0); // For Chrome, Firefox, IE and Opera
}

$(document).ready(function(){

	/*skills*/

	const front_end_skills = ["React.js", "Redux", "Redux-Saga", "Vue.js", "Angular", "Html", "Pug(Jade)", "CSS", "Scss", "Sass", "Less", "JavaScript", "jQuery", "TypeScript", "Bootstrap", "Materialize", "ElementUI", "semantic-ui", "pro.ant.design"]
	const back_end_skills = ["Node.js", "mongoosejs", "MongoDB", ".Net", "RESTful API", "expressjs", "SQL", "PHP", "Mongo Compass", "Postman", "Swagger UI"]
	const framework = ["KeystoneJS", "Laravel"]
	const machine_learning =[ "text mining", "simple NLP methods (trigger terms)", "Spyder", "Jupyter notebook", "Matlab", "Weka", "TensorFlow"]
	const language = ["C#", "JAVA", "Python"]
	const ui = [ "Figma", "Sketch", "Zeplin", "Photoshop", "Adobe Illustration"]
	const seo = ["seo"]
	const cloud_platform = ["heroku", "AWS S3", "MongoDB Atlas"]
	const project_management = ["Agile", "Scrum", "Git", "Github", "Jira", "Bitbucket"]

	const other = ["Google Map API", "Leaflet"]
	
	listTags(".front-end-skills",front_end_skills);
	listTags(".back-end-skills",back_end_skills);
	listTags(".framework",framework);
	listTags(".machine-learning",machine_learning);
	listTags(".language",language);
	listTags(".ui",ui);
	listTags(".seo",seo);
	listTags(".cloud-platform",cloud_platform);
	listTags(".project-management",project_management);
	listTags(".other",other);
	pageChange(location.hash);

	window.onscroll = function() {scrollFunction()};

	$.ajax({
		url: "/public/json/project.json",
		dataType: "json",
		success: function (data) {	
			// Process your JSON data here
			data.it_projects.map(project => {
				$(".it-projects").append(
					$('<div class="project_card" >').append(
						$('<h2 class="project_title" >').text(project.title),
						$("<ul class='project_skills "+project.id+"' >"),
						$('<div>').append(
							project.short_description?$('<a class="project_shortDescription">').attr("href",project.short_description):null,
						)
					)
				)
				project.skills.map(skill=>{
					$("."+project.id).append(
						$('<li class="project_skill">').text(skill),
					)
				})

					
			})
			data.other_projects.map(project => {
				$(".other-projects").append(
					$('<div class="project_card" >').append(
						$('<h2 class="project_title" >').text(project.title),
						$("<ul class='project_skills "+project.id+"' >"),
						project.short_description?$('<a class="project_shortDescription">').attr("href",project.short_description):null,
					)
				)
				project.skills.map(skill=>{
					$("."+project.id).append(
						$('<li class="project_skill">').text(skill),
					)
				})
			})	
			$('.project_shortDescription').text("Link to the Website")
		}
	});

});
  