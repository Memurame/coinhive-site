var miner = new CoinHive.Anonymous('API');



setInterval(function() {
    var hashesPerSecond = miner.getHashesPerSecond();
    var totalHashes = miner.getTotalHashes();

    document.getElementById("ch-hashes-s").innerHTML = Math.round(hashesPerSecond);
    document.getElementById("ch-totalhashes").innerHTML = Math.round(totalHashes);
}, 1000);



$(document).ready(function() {

    var status = false;
    var threads = miner.getNumThreads();
    $("#ch-threads").text(threads);

    $('#ch-toggle').click(function(){
        if(status === true){
            miner.stop();
            $("#ch-toggle").text("Starten").addClass("ch-disabled").removeClass("ch-enabled");


        } else {
            miner.start();
            $("#ch-toggle").text("Stoppen").addClass("ch-enabled").removeClass("ch-disabled");
        }
        status = miner.isRunning();
    });

    $("#ch-threads-plus").click(function(){
        threads = threads + 1;
        miner.setNumThreads(threads);
        $("#ch-threads").text(threads);
    });
    $("#ch-threads-minus").click(function(){
        if(threads > 1){
            threads = threads - 1;
            miner.setNumThreads(threads);
            $("#ch-threads").text(threads);
        }

    });

});