import { container } from "tsyringe";
import { SESMailProvider } from "../implementations/SESMailProvider"
import { EtherealMailProvider } from "../implementations/EtherealMailProvider";
import { IMailProvider } from "../IMailProvider";

const mailProvider = {
    ethereal: container.resolve(EtherealMailProvider),
    ses: container.resolve(SESMailProvider)
}

container.registerInstance<IMailProvider>(
    "MailProvider",
    mailProvider[process.env.MAIL_PROVIDER]
);