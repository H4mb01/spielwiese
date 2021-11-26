<template>
    <div class="painting">
        <div class="sky">
            <div class="cloud one"></div>
            <div class="cloud two"></div>
            <div class="mountain m1"></div>
            <div class="mountain m2"></div>
            <div class="mountain m3"></div>
            <div class="fog f1" ></div>
        </div>
        <div class="foreground">

        </div>
    </div>
</template>

<script>
export default {
    name: "Gemälde",

}
</script>

<style>

</style>

<style scoped>
    .painting{
        position: relative;
        width: 200px;
        height: 400px;
        border: 4px solid brown;
        display: inline-block;
        overflow: hidden;
    }
    .sky{
        position: relative;
        height: 66%;
        background: linear-gradient(blue, lightblue);
    }
    .cloud {
        position: absolute;
        background: linear-gradient(white, blue);
        box-shadow: -0px -3px 3px 0px white, 0px 3px 3px 0px blue; 
        border-radius: 50%;
    }
    .one {
        right: -30px;
        top: 60px;
        height: 10px;
        width: 100px;
    }
    .two {
        top: 100px;
        left: -25px;
        height: 10px;
        width: 200px;
        z-index: 100;
    }




    .foreground {
        position: relative;
        height: 34%;
        background: linear-gradient(90deg, darkblue, lightblue,darkblue);
        z-index: 200;
    }
    .mountain {
        position: absolute;
        background: grey;
        transform: rotate(45deg);
        z-index: 20;
        border: 3px solid lightgrey;
    }
    .m1 {
        height: 120px;
        width: 120px;
        bottom: -50px;
        left: 25px;
    }
    .m2 {
        height: 120px;
        width: 120px;
        bottom: -80px;
        left: 100px;
    }
    .m3 {
        height: 120px;
        width: 120px;
        bottom: -70px;
        left: -40px;
    }

    .fog{
        position: absolute;
        background: linear-gradient(transparent, rgba(255, 255, 255, 0.603));
    }
    .f1 {
        bottom: -0px;
        left: 0;
        height: 50px;
        width: 100%;
        z-index: 21;
    }

</style>