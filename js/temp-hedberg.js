			jQuery(function($) {
			    //Set animation frame
			    window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

			    var canvas = $('#btn')[0],
			        ctx = canvas.getContext('2d'),
			        canvasW = canvas.width,
			        canvasH = canvas.height;
			    var color = "#fff"

			    // Mask for button
			    ctx.rect(0, 0, 450, 110);
			    ctx.rect(0, 160, 450, 100);
			    ctx.rect(0, 100, 100, 60);
			    ctx.rect(350, 100, 100, 60);

			    // Clip the view of the canvas
			    ctx.clip();

			    var emitter = {};

			    var stops = [0, 125],
			        stopIndex = 0,
			        delay = 0,
			        prog = 0;

			    var circle = {
			        radius: 125,
			        angle: 0
			    };

			    var particles = new Array();

			    var rate = 2,
			        time = 0,
			        frameIndex = rate;

			    var simplex = new SimplexNoise(),
			        simplexVal = 0,
			        simplexStart = 20;

			    //Start loop

			    draw();

			    $(document).on('mouseenter mouseleave', '.btn', function() {
			        stops = [0, 125],
			            stopIndex = 0,
			            delay = 0,
			            prog = 0;
			        emitter.dx = 0;
			        emitter = {
			            h: 60,
			            x: canvasW / 2 - 125,
			            y: canvasH / 2,
			            vx: 5,
			            vy: 5,
			            v: 0.05,
			            dx: 0,
			            dy: 0
			        };

			    });

			    //Draw
			    function draw() {
			        ctx.globalCompositeOperation = 'source-out';
			        ctx.fillStyle = 'rgba(0,0,0,0)';
			        ctx.fillRect(0, 0, canvasW, canvasH);
			        ctx.globalCompositeOperation = 'normal';

			        //Move emitter
			        if (stops[stopIndex] == prog) {
			            stopIndex++;
			            delay = 0;
			        } else {
			            if (delay == 0 && prog < stops[stopIndex]) {
			                emitter.dx = -1;
			                emitter.x += 20;
			                prog += 1 * 10;
			            } else {
			                emitter.dx = 0;
			                delay--;
			            }
			        }

			        //Draw particles
			        var i = 0;
			        for (i in particles) {
			            var p = particles[i];

			            //Check if die
			            if (time > p.die) {
			                p.o -= 0.01;
			                if (p.o < 0) {
			                    particles.splice(i, 1);
			                }
			            }

			            //Add v
			            p.x += p.vx;
			            p.y += p.vy;

			            //Add source move
			            p.x += p.sourcedx / 10;
			            p.y += p.sourcedy / 10;

			            //Simplex noise
			            if (p.simplexIndex > simplexStart) {
			                p.simplexVal = simplex.noise3D(p.x / 100, p.y / 100, time / 500);
			            }

			            p.simplexIndex++;
			            p.x += p.simplexVal;
			            p.y += p.simplexVal;

			            ctx.beginPath();
			            ctx.fillStyle = color;
			            ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI, true);
			            ctx.fill();
			            ctx.save();
			        }

			        //if emitter is moving
			        if (emitter.dx !== 0) {
			            for (var i = 0; i < rate; i++) {
			                //Create particle
			                var particle = {
			                    x: emitter.x,
			                    y: emitter.y,
			                    r: Math.random() + 0.2,
			                    vx: (Math.random() - 0.5),
			                    vy: (Math.random() - 0.5),
			                    o: 1,
			                    birth: time,
			                    die: time + (Math.random() * 50 + 50), //1+1),
			                    sourcedx: emitter.dx,
			                    sourcedy: emitter.dy,
			                    red: Math.round(Math.random() * 255),
			                    green: Math.round(Math.random() * 255),
			                    blue: Math.round(Math.random() * 255),
			                    simplexVal: 0,
			                    simplexIndex: 0
			                };
			                particles.push(particle);
			            }
			        }
			        time++;
			        window.requestAnimationFrame(draw);
			    }
			});