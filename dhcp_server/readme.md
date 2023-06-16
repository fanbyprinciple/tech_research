```

default-lease-time 600;
max-lease-time 7200;

# The ddns-updates-style parameter controls whether or not the server will
# attempt to do a DNS update when a lease is confirmed. We default to the
# behavior of the version 2 packages ('none', since DHCP v2 didn't
# have support for DDNS.)
# ddns-update-style none;

# If this DHCP server is the official DHCP server for the local
# network, the authoritative directive should be uncommented.
authoritative;

# Use this to send dhcp log messages to a different log file (you also
# have to hack syslog.conf to complete the redirection).
#log-facility local7;

# No service will be given on this subnet, but declaring it helps the 
# DHCP server to understand the network topology.

#subnet 10.152.187.0 netmask 255.255.255.0 {
#}

# This is a very basic subnet declaration.

subnet 10.10.6.0 netmask 255.255.255.0 {
 range 10.10.6.60 10.10.6.90;
 option routers 10.10.10.1;
 option domain-name-servers 8.8.8.8;
}

host archmachine {
    hardware ethernet 00:0c:29:ca:b4:f2;
    fixed-address 10.10.6.75;
}
```

`sudo mv /etc/dhcp/dhcpd.conf{,.backup}`

/etc/default/isc-dhcp-server
	
INTERFACESv4="eth0"

	
sudo systemctl restart isc-dhcp-server.service


How od we connect to the server?

