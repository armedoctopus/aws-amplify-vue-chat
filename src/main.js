/*
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App'
import router from './router';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import { components } from 'aws-amplify-vue'; 

Vue.config.productionTip = false

Amplify.configure(aws_exports)

const dict = {
  'ja': {
    'User does not exist.': "ユーザー名またはパスワードが正しくありません",
    'Incorrect username or password.': "ユーザー名またはパスワードが正しくありません",
    'Password did not conform with policy: Password not long enough': "パスワードが短すぎます",
    'Invalid session for the user, session is expired.': "セッションが無効です",
    'Password attempts exceeded': "パスワードを一定回数以上間違えたため、アカウントを無効にしました",
    'Account recovery requires verified contact information': "アカウントを復旧するには連絡先の確認が必要です",
    'Back to Sign In': "サインイン画面へ戻る",
    'Change Password': "パスワード変更",
    'Change': "変更",
    'Code': "確認コード",
    'Confirm a Code': "コードを確認する",
    'Confirm Sign In': "確認",
    'Confirm Sign Up': "サインアップ",
    'Confirm': "確認",
    'Email': "メールアドレス",
    'Forgot Password': "パスワードをお忘れの場合",
    'Loading...': "ロード中...",
    'New Password': "新しいパスワード",
    'No MFA': "MFAなし",
    'Password': "パスワード",
    'Phone Number': "電話番号",
    'Pick a File': "ファイルを選択する",
    'Resend a Code': "確認コードを再送する",
    'Resend Code': "確認コードを再送する",
    'Select MFA Type': "MFAタイプの選択",
    'Select your preferred MFA Type': "MFAタイプを選択してください",
    'Sign In Account': "サインイン",
    'Sign In': "サインイン",
    'Sign Out': "サインアウト",
    'Sign Up Account': "サインアップ",
    'Sign Up': "サインアップ",
    'Skip': "スキップする",
    'Submit': "保存",
    'Username': "ユーザー名",
    'Verify Contact': "確認",
    'Verify': "確認する"
   }
};

Vue.prototype.$Amplify.I18n.putVocabularies(dict);
Vue.prototype.$Amplify.I18n.setLanguage('ja');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  template: '<App/>',
  components: { 
    App,
    ...components
  }
})
