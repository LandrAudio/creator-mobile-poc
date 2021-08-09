# SSL Setup (iOS)

Install `mkcert` (https://github.com/FiloSottile/mkcert) and use it to generate an SSL certificate.

```shell
mkcert -install local.landr.com
```

Find your `rootCA.pem`

```shell 
mkcert -CAROOT
``` 

Drag the `rootCA.pem` to a running iOS simulator

Go to the Settings app and then to `General -> Profile`

Select your new `mkcert` profile and click install and then confirm installation

You can now go to `General -> About -> Certificate Trust Settings` to enable full trust for that root certificate

# SSl Setup (Android)

https://support.n4l.co.nz/s/article/Installing-an-SSL-Certificate-on-an-Android-Device-Manually
https://lpains.net/articles/2018/install-root-ca-in-android/

# Update Android Host File

https://www.thepolyglotdeveloper.com/2019/12/change-host-file-android-emulator/

