"use client";

import { FC, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";


interface AboutUsProps {
}

export const AboutUsBody: FC = () => {
	const [lang, setLang] = useState<"en" | "tr" | "gr">("en");

	const texts = {
		en: {
			heading: "About Cylingo",
			content:
				"Hello, nice to meet you! We started this project with a deep passion for preserving and promoting the Cypriot dialect. Our goal is to provide an accessible platform where especially young people can easily learn about Cyprus’s rich linguistic heritage. By doing so, we hope to build a bridge between the two communities on the island, encouraging collaboration and mutual understanding through a shared love of language. This project is non-profit, and the donation section serves only for the sustainability and development of our website. Thanks to the financial contributions of the Kyrenia Municipality and our personal resources, our initiative has been funded for the first year. We hope that beyond this period, our project will continue to grow and serve its purpose. Through this project, we aim not only to raise awareness about the Cypriot dialect but also to inspire others to undertake similar efforts and initiatives. With your contributions, we seek to create a publicly accessible digital resource! Please reach out to us via Instagram, Twitter, Facebook, or through the feedback button on our website to share your thoughts. Your input will help us complete missing words (especially in Greek) and improve our dictionary! With Our Sincere Thanks We would like to extend our special thanks to our musician and art director, Diren Darbaz, whose creativity and dedication have been instrumental in bringing this project to life. Additionally, we wish to express our deepest gratitude to Ataöv Yalkut, Mr. Sami Özuslu, Mr. Murat Şenkul, Sude Karşılı, Alp Orgun, Γιώργος Τσολάκης (George Tsolakis), Σταυρίλια Πάπαρη (Stavrilia Papari) and everyone who has contributed their time, effort, and resources to this project. Your support helps us keep this project alive and continue its development. Together, we are contributing to the preservation and enrichment of the Cypriot dialect! We owe a heartfelt thank you to the Kyrenia Municipality, which has helped us achieve our vision. We are honored to work with them in preserving Cypriot culture and heritage. As two childhood friends, Doruk Ekingen and Uğurcan Karşılı, dedicated to helping our island in every possible way, we are happy to bring Cylingo to you!"
		},
		tr: {
			heading: "Cylingo Hakkında",
			content:
				"Biz, bu projeye Kıbrıs ağzını koruma ve tanıtmaya yönelik derin bir tutkuyla başladık. Amacımız, özellikle gençlerin Kıbrıs’ın zengin dil mirasını kolayca öğrenebileceği erişilebilir bir platform sunmaktır. Bunu yaparak, adadaki iki toplum arasında köprü kurmayı, ortak dil sevgisi aracılığıyla iş birliğini ve karşılıklı anlayışı teşvik etmeyi umuyoruz. Bu proje kâr amacı gütmemekle birlikte bağış bölümü yalnızca websitemiz için sürdürülebilirlik ve gelişim amacı taşımaktadır. Girne Belediyesinin ve bizim kişisel maddi katkılarımız sayesinde ilk yıl için finanse edilmiş girişimimizin bu sürecin ötesinde de gelişmeye ve amacına hizmet etmeye devam edeceğini umuyoruz. Bu projemiz sayesinde, sadece Kıbrıs lehçesi hakkında daha fazla bilgi edinmeyi değil, aynı zamanda başkalarına da benzer çaba ve girişimlerde bulunmaları için ilham vermeyi amaçlıyoruz. Sizlerin de katkıları sayesinde halka açık dijital bir kaynak oluşturmayı amaçlamaktayız! Lütfen bizimle İnstagram, Twitter, Facebook veya sitemiz üzerindeki geribildirim butonu üzerinden iletişime geçin ve fikirlerinizi belirtin, bu sayede eksik olan(özellikle Rumca) kelimeleri tamamlamamıza ve sözlüğümüzü geliştirmemize yardımcı olun! İçten Teşekkürlerimizle Yaratıcılığı ve özverisiyle bu projenin hayata geçirilmesinde büyük emeği olan müzisyenimiz ve sanat yönetmenimiz Diren Darbaz’a özel olarak teşekkür ederiz. Ayrıca Ataöv Yalkut, Hasan Ekingen, Sayın Sami Özuslu, Sayın Murat Şenkul, Sude Karşılı, Alp Orgun, Γιώργος Τσολάκης(George Tsolakis), Σταυρίλια Πάπαρη(Stavrilia Papari) ve bu projeye zaman, emek ve kaynaklarıyla katkıda bulunan herkese en derin şükranlarımızı sunmak istiyoruz. Desteğiniz bu projeyi canlı tutmamıza ve geliştirmemize yardımcı oluyor. Birlikte, Kıbrıs lehçesini koruma ve geliştirmeye katkıda bulunuyoruz! Bize, hayalimize ulaşma noktasında yardımcı olan Girne Belediyesine kalpten bir teşekkürü borç biliriz. Kıbrıs kültür ve mirasını koruma konusunda kendileriyle iş yapmaktan onur duyarız. Biz, kendilerini adaya mümkün olan her şekilde yardım etmeye adamış iki çocukluk arkadaşı, Doruk Ekingen ve Uğurcan Karşılı olarak, Cylingo’yu sizlere ulaştırabilmekten mutluluk duyarız."
		},
		gr: {
			heading: "Σχετικά με το Cylingo",
			content:
				"Γεια σας, χαίρομαι που σας γνωρίζω! Ξεκινήσαμε αυτό το έργο με πάθος για τη διατήρηση και την προώθηση της κυπριακής διαλέκτου. Ο στόχος μας είναι να παρέχουμε μια προσβάσιμη πλατφόρμα όπου οι νέοι μπορούν εύκολα να μάθουν για την πλούσια γλωσσική κληρονομιά της Κύπρου. Με αυτόν τον τρόπο, ελπίζουμε να χτίσουμε μια γέφυρα μεταξύ των δύο κοινοτήτων στο νησί, ενισχύοντας τη συνεργασία και την αμοιβαία κατανόηση μέσα από την αγάπη μας για τη γλώσσα. Αυτό το έργο δεν έχει κερδοσκοπικό χαρακτήρα. Η ενότητα των δωρεών υπάρχει μόνο για τη βιωσιμότητα και την ανάπτυξη της ιστοσελίδας μας. Χάρη στη χρηματοδοτική υποστήριξη του Δήμου Κερύνειας και των προσωπικών μας πόρων, το έργο μας έχει χρηματοδοτηθεί για τον πρώτο χρόνο. Ελπίζουμε ότι μετά από αυτή την περίοδο, το έργο μας θα συνεχίσει να αναπτύσσεται και να εξυπηρετεί τον σκοπό του. Μέσα από αυτό το εγχείρημα, δεν θέλουμε απλώς να αυξήσουμε τη γνώση για την κυπριακή διάλεκτο, αλλά και να εμπνεύσουμε άλλους να δημιουργήσουν παρόμοιες πρωτοβουλίες. Με τη βοήθειά σας, στοχεύουμε να δημιουργήσουμε έναν δημόσια διαθέσιμο ψηφιακό πόρο! Σας προσκαλούμε να επικοινωνήσετε μαζί μας μέσω Instagram, Twitter, Facebook, ή μέσω του κουμπιού σχολίων στον ιστότοπό μας για να εκφράσετε τις απόψεις σας. Η συμβολή σας θα μας βοηθήσει να συμπληρώσουμε τις ελλείψεις (ιδιαίτερα στα ελληνικά) και να βελτιώσουμε το λεξικό μας! Με Ειλικρινείς Ευχαριστίες Θα θέλαμε να εκφράσουμε την ιδιαίτερη ευγνωμοσύνη μας στον μουσικό και καλλιτεχνικό μας διευθυντή, Diren Darbaz, του οποίου η δημιουργικότητα και η αφοσίωση ήταν καθοριστικές για την πραγματοποίηση αυτού του έργου. Επιπλέον, εκφράζουμε τη βαθύτατη ευγνωμοσύνη μας στους Ataöv Yalkut, κύριο Sami Özuslu, κύριο Murat Şenkul, Sude Karşılı, Alp Orgun, Γιώργος Τσολάκης, Σταυρίλια Πάπαρη καθώς και σε όλους όσοι συνέβαλαν με χρόνο, κόπο και πόρους σε αυτό το έργο. Η υποστήριξή σας μας επιτρέπει να διατηρούμε ζωντανό αυτό το έργο και να το αναπτύσσουμε! Οφείλουμε ένα ειλικρινές ευχαριστώ στον Δήμο Κερύνειας, ο οποίος μας βοήθησε να πραγματοποιήσουμε το όραμά μας. Είναι τιμή μας να συνεργαζόμαστε μαζί τους για τη διατήρηση της κυπριακής πολιτιστικής κληρονομιάς. Ως δύο παιδικοί φίλοι, Doruk Ekingen και Uğurcan Karşılı, που είναι αφοσιωμένοι στο να βοηθήσουν την Κύπρο με κάθε δυνατό τρόπο, είμαστε χαρούμενοι που σας παρουσιάζουμε το Cylingo!"
		}
	};

	return (
		<div
			className="flex flex-col items-center justify-start gap-8 bg-secondary p-12 text-secondary-content min-h-[1000px]">
			<div className="flex gap-2">
				<Button
					className="bg-primary text-primary-content w-24"
					onClick={() => setLang("en")}
				>
					English
				</Button>
				<Button
					className="bg-primary text-primary-content w-24"
					onClick={() => setLang("tr")}
				>
					Türkçe
				</Button>
				<Button
					className="bg-primary text-primary-content w-24"
					onClick={() => setLang("gr")}
				>
					Ελληνικά
				</Button>
			</div>
			<Image src={"/cylingo_goats.png"} alt={"Cylingo Goats"} width={400} height={400} />
			<div className="flex flex-col items-center justify-center gap-8 w-3/4">
				<h2 className="text-2xl font-bold">{texts[lang].heading}</h2>
				<p className="text-secondary-content">{texts[lang].content}</p>
			</div>
			<div className={"flex gap-4 mt-auto"}>
				<Image src={"/girne_belediye_logo.png"} alt={"grine belediyesi logosu"} width={100} height={100} />
				<Image src={"/diren_dillirga.jpg"} alt={"dillirga game ost logo - diren"} width={100} height={100} />
			</div>
		</div>
	);
};