package com.awesomeproject.rn;

import android.app.AlertDialog;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

// 原生模块
public class AlertModule extends ReactContextBaseJavaModule {
    private ReactApplicationContext mContext;

    public AlertModule(@Nullable ReactApplicationContext reactContext) {
        super(reactContext);
        mContext = reactContext;
    }

    @NonNull
    @Override
    public String getName() {
        //  返回原生模块注册时的名称,从react 层的js代码调用 AppModule这个原生模块，必须先知道模块的名称
        return "AlertModule";
    }

    @ReactMethod
    public void toast(String message) {
        // @ReactMethod 修饰js调用的原生方法
        /**
         * js中使用
         * const Alert = NativeModules.AlertModule
         * Alert.toast();
         */
        Toast.makeText(getReactApplicationContext(), message, Toast.LENGTH_SHORT).show();
    }
    @ReactMethod
    public void alert(String title, String message) {
        AlertDialog.Builder tDialog = new AlertDialog.Builder(getCurrentActivity());
        tDialog.setTitle(title);
        tDialog.setMessage(message);
        tDialog.setPositiveButton("确定", null);
        tDialog.setNegativeButton("取消", null);
        tDialog.show();
    }
}
