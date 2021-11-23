FROM node:alpine

WORKDIR /app

COPY ./package*.json ./

RUN npm install

COPY . ./

ENV MONGO_URI = mongodb+srv://swarajdhore:smdMongoShapeAI@zomato.2bbz5.mongodb.net/zomato?retryWrites=true&w=majority
ENV GOOGLE_CLIENT_ID = 819543914987-ki0oqv3vg0fpl58vbh1erem1mtqlra3b.apps.googleusercontent.com
ENV GOOGLE_CLIENT_SECRET = dZNXWsXsB9w50M6nC75nJkBX
ENV AWS_S3_ACCESS_KEY = AKIAVSR566S5TZNKAB4L
ENV AWS_S3_SECRET_KEY = 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
ENV MAILGUN__API__KEY = 828d13989e3a203ede6de61d9e09afd0-20ebde82-a4fc4313
ENV MAILGUN__DOMAIN = sandboxefe5fbf206304731a11870f6e071c2a2.mailgun.org
ENV RZR_PAY_ID = rzp_test_fJcKOHuWdkZXQa
ENV RZR_PAY_SECRET = NhsAKNhzXw3lPA9MhA2tZyu8
ENV PORT=4000

CMD ["npm", "run", "start"]