rm -rf android/app/src/main/java/com/$PROJECT_NAME_LOWER

keytool -genkey -v -noprompt \
				-keystore $PROJECT_NAME.keystore \
				-alias $PROJECT_NAME \
				-keyalg RSA \
				-keysize 2048 \
				-validity 10000 \
				-dname "CN=Unknown, OU=Unknown, O=Unknown, L=Unknown, ST=Unknown, C=Unknown" \
				-storepass 12345678 \
				-keypass 12345678

mv $PROJECT_NAME.keystore android/app
