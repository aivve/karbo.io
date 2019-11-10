
var block, last_block_hash, blocks_time_avg, last_block_height, last_block_difficulty, last_block_reward, hashrate;

	function updateText(elementId, text){
        var el = document.getElementById(elementId);
        if (el.textContent !== text){
            el.textContent = text;
        }
        return el;
    }
	
    function formatSupply(coins, digits){
        var amount = (parseInt(coins || 0) / 1000000000000).toFixed(digits || 12);
        return amount;
    }

    function getReadableHashRateString(hashrate){
        var i = 0;
        var byteUnits = [' H/s', ' kH/s', ' MH/s', ' GH/s', ' TH/s', ' PH/s' ];
        while (hashrate > 1024){
            hashrate = hashrate / 1024;
            i++;
        }
        return hashrate.toFixed(2) + byteUnits[i];
    }
	
	function getReadableDifficultyString(difficulty){
        var i = 0;
        var Units = ['', ' k', ' M', ' G', ' T', ' P'];
        while (difficulty > 1000){
            difficulty = difficulty / 1000;
            i++;
        }
        return difficulty.toFixed(2) + Units[i];
    }


function statsRefresh() {

		$.ajax({
            url: 'https://karbo.io/api/',
            method: "POST",
            data: JSON.stringify({
                jsonrpc:"2.0",
                id: "last_block",
                method:"getlastblockheader",
                params: {
  
                }
            }),
            dataType: 'json',
            cache: 'false',
            success: function(data){
				
				last_block_height = data.result.block_header.height;
					updateText('blockchain-height', last_block_height);
					
				last_block_difficulty = data.result.block_header.difficulty;
					updateText('difficulty', getReadableDifficultyString(last_block_difficulty));
					
					
				last_block_reward = data.result.block_header.reward;
					updateText('reward', formatSupply(last_block_reward) + ' KRB');
					
				var options = {
					  year: 'numeric',
					  month: 'long',
					  day: 'numeric',
					  weekday: 'long',
					  timezone: 'UTC',
					  hour: 'numeric',
					  minute: 'numeric',
					  second: 'numeric'
				};

				
				
				var theDate = new Date(data.result.block_header.timestamp * 1000); var dateString = theDate.toLocaleString('en', options);
				
				updateText('last-block', dateString);
				
				
				last_block_hash = data.result.block_header.hash;
				
				
						 $.ajax({
									url: 'https://karbo.io/api/',
									method: "POST",
									data: JSON.stringify({
										jsonrpc:"2.0",
										id: "supply",
										method:"f_block_json",
										params: {
										   hash: last_block_hash
										}
									}),
									dataType: 'json',
									cache: 'false',
									success: function(data){
										block = data.result.block;
									
										updateText('emission', formatSupply(block.alreadyGeneratedCoins) + ' крб.');
										
									}
						});
									hashrate = last_block_difficulty/240;
									updateText('hashrate', getReadableHashRateString(hashrate));
            }
        });


}
// Do the initial pull
statsRefresh();
// Refresh every 300000
setInterval(statsRefresh, 300000);