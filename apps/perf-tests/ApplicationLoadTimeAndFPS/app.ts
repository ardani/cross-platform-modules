﻿import application = require("application");
import fps = require("fps-meter");

fps.addCallback(function (fps, minFps) {
    console.info("fps=" + fps + " minFps=" + minFps);
});
fps.start();

application.mainModule = "app/ApplicationLoadTimeAndFPS/mainPage";

application.start();
