(function() {

   var userName = $SPA.firstName + ' ' + $SPA.lastName;

   document.getElementById('userName').innerHTML = userName;

  

   Visualforce.remoting.Manager.invokeAction(
   		$SPA.jsr.getUsers,
   		function(result,event){
   			if(event.status){
   				for(var i=0;i<result.length;i++){
   					 addUser(result[i]);
   				}
   				//document.getElementById('users').innerHTML = JSON.stringify(result, null, '\t');
   			}else{
   				alert(event.message);
   			}
   		}
   	);

   function addUser(user){
   		var userList = document.getElementById('userList');
   		var userItem = document.createElement('li');
   		var img  = document.createElement('img');

   		img.src = user.FullPhotoUrl;
   		img.className = 'user';

   		var span = document.createElement('span');
   		span.innerHTML = user.Name;


   		var aTag = document.createElement('a');
   		aTag.setAttribute('href', '/' + user.Id);
   		aTag.appendChild(img);

   		aTag.appendChild(span);
   		userItem.appendChild(aTag);

   		userList.appendChild(userItem);
   }
   
})();