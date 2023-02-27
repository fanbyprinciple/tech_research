https://www.cyberciti.biz/faq/ubuntu-18-04-lts-set-up-openvpn-server-in-5-minutes/

`wget https://git.io/vpn -O openvpn-install.sh`

`chmod +x openvpn-install.sh`

`vim openvpn-install.sh`

`sudo ./openvpn-install.sh`

```
sudo systemctl stop openvpn-server@server.service #<--- stop server
sudo systemctl start openvpn-server@server.service #<--- start server
sudo systemctl restart openvpn-server@server.service #<--- restart server
sudo systemctl status openvpn-server@server.service #<--- get server status
```

The client configuration is available in: /root/desktop.ovpn

this desktop.ovpn can be used to connect to the openvpn client

