import LocalizedStrings from 'localized-strings';

export default new LocalizedStrings.default({
    fr: {
        ERROR: 'Erreur interne : ',
        DB_ERROR: 'Échec de la requête dans la base de données : ',
        SMTP_ERROR: "Échec de l'envoi de l'email: ",
        ACCOUNT_ACTIVATION_SUBJECT: 'Activation de votre compte',
        HELLO: 'Bonjour ',
        ACCOUNT_ACTIVATION_LINK: 'Veuillez activer votre compte en cliquant sur le lien :',
        REGARDS: "Cordialement,<br>L'équipe ShoppingCart",
        ACCOUNT_ACTIVATION_TECHNICAL_ISSUE: 'Problème technique! Veuillez cliquer sur renvoyer pour valider votre e-mail.',
        ACCOUNT_ACTIVATION_LINK_EXPIRED: 'Votre lien de validation a peut-être expiré. Veuillez cliquer sur renvoyer pour valider votre e-mail.',
        ACCOUNT_ACTIVATION_LINK_ERROR: "Nous n'avons pas pu trouver d'utilisateur correspondant à cette adresse e-mail. Veuillez vous inscrire.",
        ACCOUNT_ACTIVATION_SUCCESS: 'Votre compte a été validé avec succès.',
        ACCOUNT_ACTIVATION_RESEND_ERROR: "Nous n'avons pas pu trouver d'utilisateur correspondant à cette adresse e-mail. Assurez-vous que votre e-mail est correct.",
        ACCOUNT_ACTIVATION_ACCOUNT_VERIFIED: 'Ce compte a déjà été validé. Veuillez vous connecter.',
        ACCOUNT_ACTIVATION_EMAIL_SENT_PART_1: 'Un email de validation a été envoyé à',
        ACCOUNT_ACTIVATION_EMAIL_SENT_PART_2: ". Il expirera au bout d'un jour. Si vous n'avez pas reçu d'e-mail de validation, cliquez sur renvoyer.",
        PASSWORD_RESET_SUBJECT: 'Réinitialisation du mot de passe',
        PASSWORD_RESET_LINK: 'Veuillez réinitialiser votre mot de passe en cliquant sur le lien :',
        SUBSCRIBED_TO: "a souscrit à l'abonnement",
        NEW_SUBSCRIPTION: 'Nouvelle inscription',

        ORDER_CONFIRMED: 'Votre commande a bien été confirmée.',
        ORDER_CONFIRMED_PART_1: 'Votre commande ',
        ORDER_CONFIRMED_PART_2: ' a bien été confirmée.',
        ORDER_CONFIRMED_PART_3: 'Vous pouvez suivre votre commande sur le lien suivant : ',
        NEW_ORDER: 'Nouvelle commande',
        NEW_ORDER_PART_1: 'La nouvelle commande ',
        NEW_ORDER_PART_2: " vient d'être effectuée.",
        NEW_ORDER_PART_3: 'Vous pouvez la consulter sur le lien suivant : ',

        ORDER_UPDATED_PART_1: 'Votre commande ',
        ORDER_UPDATED_PART_2: ' a été mise à jour.',
    },
    en: {
        ERROR: 'Internal error: ',
        DB_ERROR: 'Database Failure: ',
        SMTP_ERROR: 'Failed to send email: ',
        ACCOUNT_ACTIVATION_SUBJECT: 'Account Activation',
        HELLO: 'Hello ',
        ACCOUNT_ACTIVATION_LINK: 'Please activate your account by clicking the link:',
        REGARDS: 'Kind regards,<br>ShoppingCart team',
        ACCOUNT_ACTIVATION_TECHNICAL_ISSUE: 'Technical Issue! Please click on resend to validate your email.',
        ACCOUNT_ACTIVATION_LINK_EXPIRED: 'Your validation link may have expired. Please click on resend to validate your email.',
        ACCOUNT_ACTIVATION_LINK_ERROR: 'We were unable to find a user for this verification. Please Sign up.',
        ACCOUNT_ACTIVATION_SUCCESS: 'Your account was successfully verified.',
        ACCOUNT_ACTIVATION_RESEND_ERROR: 'We were unable to find a user with that email. Make sure your Email is correct.',
        ACCOUNT_ACTIVATION_ACCOUNT_VERIFIED: 'This account has already been verified. Please sign in.',
        ACCOUNT_ACTIVATION_EMAIL_SENT_PART_1: 'A validation email has been sent to ',
        ACCOUNT_ACTIVATION_EMAIL_SENT_PART_2: ". It will be expire after one day. If you didn't receive validation email click on resend.",
        PASSWORD_RESET_SUBJECT: 'Password Reset',
        PASSWORD_RESET_LINK: 'Please reset your password by clicking the link:',
        SUBSCRIBED_TO: 'subscribed to',
        NEW_SUBSCRIPTION: 'New subscription',

        ORDER_CONFIRMED: 'Your order was confirmed',
        ORDER_CONFIRMED_PART_1: 'Your order ',
        ORDER_CONFIRMED_PART_2: ' was confirmed.',
        ORDER_CONFIRMED_PART_3: 'You can track your order on the following link:',
        NEW_ORDER: 'New order',
        NEW_ORDER_PART_1: 'The new order ',
        NEW_ORDER_PART_2: " has just been done.",
        NEW_ORDER_PART_3: 'You can check it on this link: ',

        ORDER_UPDATED_PART_1: 'Your order ',
        ORDER_UPDATED_PART_2: ' was updated.',
    }
});
