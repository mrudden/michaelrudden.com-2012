var posts = tumblr_api_read.posts;

for (var i = 0; i<posts.length; i++) {

	var post = posts[i];
	var postType = post.type;

	if (postType == 'regular') {
		var postTitle = post['regular-title'];
		var postDate = post['date'];
		var postBody = post['regular-body'];
 		
		document.write(
			'<div class="blog-post">' + '\n' +
			'<h3>' + postDate  + '</h3>' + '\n' +
			'<h4>' + postTitle + '</h4>' + '\n' +
			'<h5>&#123;</h5>' + '\n' +
			postBody + '\n' +
			'<h5>&#125;</h5>' + '\n' +
			'</div>'
    		);
	} else if (postType == 'photo') {
		var postDate = post['date'];
		var photoURLSmall = post['photo-url-400'];
		var photoURLLarge = post['photo-url-1280'];
		var photoCaption = post['photo-caption'];
		
		document.write(
			'<div class="blog-photo">' + '\n' +
			'<h3>' + postDate + '</h3>' + '\n' +
			'<a href="' + photoURLLarge  + '" target="_blank"><img src="' + photoURLSmall + '"/></a>' + '\n' +
			photoCaption + '\n' +
			'</div>'	
    		);
	} else {
		document.write('<p>This type of tumblr post not currently supported on this website</p>');
	}
}
