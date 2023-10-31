Shery.imageEffect(".back", {style:4, config:{"uColor":{"value":false},"uSpeed":{"value":0.6,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":1.5,"range":[0,5]},"uFrequency":{"value":3.5,"range":[0,10]},"geoVertex":{"range":[1,64],"value":32},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.0440386680988185},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.3,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.78,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}, gooey:true});



var elems = document.querySelectorAll("#elem");
elems.forEach(function(elem) {
    var h1s = elem.querySelectorAll("h1");
    var index = 0;
    var animating = false;

    document.querySelector(".main").addEventListener("click", function() {
        if (!animating) {
            animating = true;

            gsap.to(h1s[index], {
                top: "-=100%", // Move the element up by 100%.
                ease: Expo.easeInOut,
                duration: 1,
                onComplete: function() {
                    gsap.set(this._targets[0], { top: "100%" });
                    animating = false;
                },
            });

            index = (index === h1s.length - 1) ? 0 : (index + 1);

            gsap.to(h1s[index], {
                top: "-=100%", // Move the next element back to its original position.
                ease: Expo.easeInOut,
                duration: 1,
            });
        }
    });
});


{/* <h1> exhilarating </h1>
                        <h1>Lamborghini is</h1>
                        <h1> Lamborghini </h1>
                        <h1>Aventador</h1>
                        <h1>sleek designs</h1>
                       
                    </div>
                    <div id="elem">
                        <h1>experience like</h1>
                        <h1>cutting-edge</h1>
                        <h1>symbol of</h1>
                        <h1>roars with </h1>
                        <h1>redefine</h1>
                     
                    </div>
                    <div id="elem">
                        <h1>no other.</h1>
                        <h1>supercar.</h1>
                        <h1>luxury.</h1>
                        <h1>unparalleled power.</h1>
                        <h1>elegance.</h1>
                        
                    </div> */}