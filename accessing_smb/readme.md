/usr/bin/smbclient -L 10.10.150.1

```
---       ----      -------
        splunk          Disk      
        IPC$            IPC       IPC Service (Samba 4.9.5-Debian)
Reconnecting with SMB1 for workgroup listing.
Anonymous login successful

        Server               Comment
        ---------            -------

        Workgroup            Master
        ---------            -------
        WORKGROUP            RANDD1
```

/usr/bin/smbclient //10.10.150.1/IPC$

to connect ot the share


