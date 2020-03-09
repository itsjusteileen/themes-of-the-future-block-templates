

```js
(function() {
    var createdItem = document.createElement("DIV");
    var textFill = document.createTextNode("Look who is up front");
    createdItem.appendChild(textFill);

    var prependMe = document.getElementById("theTarget");
    prependMe.insertBefore(createdItem, prependMe.childNodes[0]);
})();
```

```css
	<style type="text/css">
		headerleft {
			display: flex;
			color: #B63BE2;
			color: salmon;
			font-family: "Syncopate", Helvetica, sans-serif;
			font-weight: 400;
			/*text-transform: uppercase;*/
			font-size: 0.5em;
			line-height: 1.2em;
			vertical-align: top;
		}
		</style>
```
```css
	<style type="text/css">
		/* 1. Style header/footer <div> so they are positioned as desired. */
		.header-left {
			position: absolute;
			top: 0%;
			left: 0%;
		}
	</style>
```
```js
			(function () {
				var target = document.getElementById('left-header');
				let headerTopic = document.querySelector(".slides > section > small");
				headerTopic.setAttribute("id", "moveMeIntoMain");
				headerTopic.style.display = 'none';

				// 3. On Reveal.js ready event, copy header/footer <div> into each `.slide-background` <div>
				var header = $('.header').html();
				if ( window.location.search.match( /print-pdf/gi ) ) {
					Reveal.addEventListener( 'ready', function( event ) {
						$('.slide-background').append(header);
					});
				} else {
						setTimeout(function(){
							// $('div.reveal').append(header);
							headerTopic.insertBefore(target, headerTopic.childNodes[0]);

						}, 2000);
					// $('div.reveal').append(header);
				}
			})();
```
```js
	$(document).ready(function() {
		$("#moveMeIntoMain").prependTo($(".wrapper"));
	});
```
		<!-- <div id="header-left"><small>Full Site Editing</small></div> -->
```
		<!-- 2. Create hidden header/footer <div> -->
			<div class="hidden" style="display:none;">
				<div class="header">
					<div class="header-left"><small>Full Site Editing</small></div>
					<!-- <div id="header-right">HEADER-RIGHT</div>
					<div id="footer-left">FOOTER-LEFT</div> -->
				</div>
			</div>

			<script type="text/javascript">

				let headerTopic = document.querySelector(".slides > section.present > small");
				headerTopic.style.border = "2px solid salmon";

				let headerTarget = document.querySelector(".slides > section.present > small");
				headerTarget.style.border = "2px solid salmon";

			// 3. On Reveal.js ready event, copy header/footer <div> into each `.slide-background` <div>
				var header = $('.header').html();
				if ( window.location.search.match( /print-pdf/gi ) ) {
					Reveal.addEventListener( 'ready', function( event ) {
						$('.slide-background').append(header);
					});
				}
				else {

					(function () {
						setTimeout(function(){
							$('div.reveal').append(header);
						}, 3000);
					})();
					$('div.reveal').append(header);
				}
			</script>
			```
			<small>Full Site Editing</small>