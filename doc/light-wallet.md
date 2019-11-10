# Light Wallet & Masternodes

## Light Wallet

It is possible to use wallet without blockchain, in remote mode it will be connected to the remote node. This allows to get fully functional wallet faster.

Just select remote node in settings and restart wallet if you're using GUI, or run **simplewallet** from CLI suite with `--daemon-address` or `--daemon-host` and `--daemon-port` flags. It is quite safe, the node can't steal your coins.
			

If you choose *node.karbowanec.com* you will be connected to random *'masternode'* running by community members. The list of available masternodes can be found at [karbo-exchange.com.ua](http://karbo-exchange.com.ua/nodelist.html), [map.karbo.xyz](http://map.karbo.xyz/masternodes).


## Masternodes for Lite Wallets

Cryptonote coin's wallets can operate through remote daemon without downloading blockchain. It allows to start working quickly when needed. It is quite safe as remote daemon can't steal your coins, running own node is more secure of course. To work through remote daemon in **simplewallet** you need to specify remote daemon's address with flag for example `--daemon-address=136.243.158.27:32348`, in GUI you can just select remote node in settings or add custom one. But these remote nodes are not rewarded anyhow in any CN coin. Only in Karbowanec such remote nodes are rewarded for their service. We call them Masternodes because this term is well known.

So, basically, Masternode it is the CLI Karbowanec daemon running on a machine with open port which allows to connect to it for such light wallets and, most important, mobile wallets in the future. Karbowanec wallets, connected to Masternode, are paying small fees to that node when are sending transactions through it. These fees are supposed to help to cover the costs of operating Karbowanec nodes.

These Masternodes are providing service necessary for mobile wallets, and besides are helping to maintain and enlarge Karbowanec network. We have plans no incentivize such nodes even more in the future.


To start own Karbowanec masternode all is needed is just a machine with static IP and open port. Machine should have enough CPU power to handle load when parsing blockchain for connected wallets, it can be even spare PC at home. On such machine you can run karbowanec daemon  specifying a wallet address where fees would go like this:
			
```
./karbowanecd --restricted-rpc --enable-cors=*  --enable-blockchain-indexes --rpc-bind-ip=0.0.0.0 --rpc-bind-port=32348
--fee-address=KaqCQAbx3BSKKv7ED98oQP9QSP3igqgo47hPYZ8q6KZyUY6GnDaQkh9WbVR4DxvmCq8mZcKPg3wfWFJQ5CsyrxPqKcXC3rx
```
			
You can specify any wallet address, it can be your GUI wallet address, even paper wallet. This is the wallet where you will receive fees.</p>
			
You need to make sure your port is open and not blocked by firewall. If you are running it at home behind router you need to do port forwarding.</p>

If you have PC at home  constantly running with fast connection and static IP and  want to operate such Masternode to help Karbowaec network, run daemon as in example and send me you IP so I can add it do default nodes list.</p>
			
You can check if your node is running opening its IP in browser like this:
```
http://185.51.246.81:32348/feeaddress
```
and you should see something like this:
```
{"fee_address":"KhjM2KE6CXnDqERpSQckdgaT1VcpPuqxKavZwLxYwtqs4j3eWCVE9MtEV4xxdQVp13V4NYMRWbQqYG9jRw5XNkRUKLjfHwR","status":"OK"}
```
with your wallet address where fees should go.

You can also run Masternode on VPS with dedicated domain and publish here with description so people can add your node manually if they prefer it. It is not recommended to run node on VPS now specially for Karbowanec, do it only when you already have spare VPS and it is idling.

For now, do not expect yet to earn a lot of fees because there is very low usage of such remote nodes.