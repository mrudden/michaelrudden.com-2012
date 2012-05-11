var posts = tumblr_api_read.posts;

for (var i = 0; i<posts.length; i++) {

	var post = posts[i];
	var postType = post.type;

	if (postType == 'regular') {
		var postTitle = post['regular-title'];
		var postDate = post['date'];
		var postBody = post['regular-body'];
 		
		document.write(
			'<h3>' + postTitle + '</h3>' + '\n' +
			'<h4>' + postDate + '</h4>' + '\n' +
			postBody
    		);
	} else if (postType == 'photo') {
		var postDate = post['date'];
		var photoURL = post['photo-url-400'];
		var photoCaption = post['photo-caption'];
		
		document.write(
			'<h4>' + postDate + '</h4>' + '\n' +
			'<img src="' + photoURL + '"/>' + '\n' +
			photoCaption
			
    		);
	} else {
		document.write('<p>This type of tumblr post not currently supported on this website</p>');
	}
}
