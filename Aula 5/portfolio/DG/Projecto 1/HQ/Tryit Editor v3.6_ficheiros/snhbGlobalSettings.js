var snhb = snhb || {};
snhb.globalSettings = {  
    currencyConversionEURTo: {
        // http://sdw.ecb.europa.eu/quickview.do?SERIES_KEY=120.EXR.M.USD.EUR.SP00.A
        USD: { year: 2019, month: 1, rate: 1.1416 },
        AUD: { year: 2019, month: 1, rate: 1.5975 },
        NZD: { year: 2019, month: 1, rate: 1.6850 }
    },    
    bidderAdjustments: {
        "default": { c: "USD", s: 0.00 },
        "adform": { c: "USD", s: 0.15 },
        "criteo": { c: "EUR", s: 0.00 },
        "districtmDMX": { c: "USD", s: 0.15 },
		"fidelity": { c: "USD", s: 0.30 },
        "openx": { c: "EUR", s: 0.00 },
        "pixfuture": { c: "USD", s: 0.40 },
        "rubicon": { c: "USD", s: 0.20 },
        "smartadserver": { c: "USD", s: 0.15 }
    },
    gdpr: {
        eeaCookieName: "snhbFromEEA",
        eeaCookieExpiresSeconds: 172800,
        cmpFullConsent: "snhbCmpFullConsent",
        cmpConsentsCookieName: "euconsent",
        reconsiderationAppealIntervalCookieName: "snReconsiderAppealMuted",
        reconsiderationAppealCookieName: "snReconsiderAppealEnabled",
        googleId: 1000,
        snVendorIds: [ 25, 50, 32, 56, 138, 24, 144, 10, 62, 69, 76, 81, 36, 52, 45, 13, 228, 104, 253 ],
        localization: {           
            de: {
		intro: {
			title: 'Danke für den Besuch auf',
			description: 'Um diese Webseite erfolgreich zu betreiben verwenden wir und unsere Partner sogenannte Cookies (kleine Textdateien) im Webbrowser um zu verstehen, was unsere Besucher interessiert um entsprechend relevante Inhalte und Werbung anbieten zu können. Zukünftig benötigen wir das Einverständnis unserer Nutzer hierfür auch.',
			acceptAll: 'Alle Cookies akzeptieren',
			rejectAll: 'Alle Cookies ablehnen',
			showPurposes: 'Verwendungszwecke anzeigen'
		},
		details: {
			title: 'Datenschutzeinstellungen',
			back: 'Abbrechen',
			save: 'Speichern und beenden'
		},
		purposes: {
			active: 'Aktiv',
			inactive: 'Inaktiv',
			showVendors: 'Alle Partner anzeigen',
			cookies: {
				menu: 'Wie wir Cookies einsetzen',
				title: 'Diese Website verwendet Cookies',
				description: 'Unsere Partner und wir setzen Cookies (kleine Textdateien) und sammeln Informationen während des Surfens im Web in diesem Browser. Dies dient dazu zu verstehen, was unsere Besucher interessiert und entsprechend relevante Inhalte und Werbung anbieten zu können.'
			},
			purpose1: {
				menu: 'Zugriff auf ein Gerät',
				title: 'Zugriff auf ein Gerät',
				description: 'Die Erlaubnis zum Speichern und Abrufen von Informationen auf dem Gerät eines Website-Besuchers.Das ist notwendig, um Cookies im Web-Browser zu speichern und zur Anzeige relevanter Informationen und Werbung abrufen zu können.'
			},
			purpose2: {
				menu: 'Personalisierung',
				title: 'Personalisierung',
				description: 'Die Erlaubnis, Besucherdaten so zu verarbeiten und/oder zu speichern und abzurufen, dass persönlich angepaßte Werbung angeboten und angezeigt werden kann (dies umfaßt die Auslieferung, Messung und die Erstellung von Berichten darüber). Dies erfolgt auf der Basis bekannter Präferenzen oder Interessen, oder durch das Schließen auf Präferenzen oder Interessen durch die Erfassung von Daten auch über verschiedene Websites, Apps oder Geräte hinweg zu diesem Zweck.'
			},
			purpose3: {
				menu: 'Analyse',
				title: 'Analyse',
				description: 'Die Erlaubnis, Besucherdaten zur Anzeige von Inhalten oder Werbung zu verarbeiten, und zur Messung der Auslieferung solcher Inhalte oder Werbung. Umfasst ist die Gewinnung von Erkenntnissen und die Generierung von Berichten um die Nutzung des angebotenen Service zu verstehen, und/oder das Abrufen oder Speichern von Informationen auf Geräten zu diesem Zweck.'
			},
			purpose4: {
				menu: 'Persönlich angepasste Inhalte',
				title: 'Persönlich angepasste Inhalte',
				description: 'Die Erlaubnis, Besucherdaten zur Anzeige von personalisierten Inhalten zu verarbeiten, und zur Messung der Auslieferung. Umfasst ist die Gewinnung von Erkenntnissen darüber und die Generierung von Berichten dazu. Dies erfolgt auf der Basis bekannter Präferenzen oder Interessen, oder durch das Schließen auf Präferenzen oder Interessen durch die Erfassung von Daten auch über verschiedene Websites, Apps oder Geräte hinweg zu diesem Zweck.'
			},
			purpose5: {
					menu: 'Evaluierung',
					title: 'Evaluierung',
					description: 'Erlaubt das Sammeln von Informationen über Nutzung der Inhalte und das Zusammenfassen mit zuvor gesammelten Informationen, welche verwendet werden, um das Nutzungsverhalten des Dienstes auszuwerten. Dies umfasst nicht die Personalisierung, sondern sammelt Informationen über die Nutzung dieses Dienstes, um Inhalte und/oder Werbung in anderen Kontexten, z.B. auf anderen Diensten wie Websites oder Apps, weiter anzupassen.'
			}
		},
		vendors: {
			title: 'Unsere Partner',
			rejectAll: 'Alle ablehnen',
			acceptAll: 'Alle akzeptieren',
			company: 'Unternehmen',
			offOn: 'Aus/An',
			description: 'Helfen Sie uns, Ihnen einen besseren Service zu bieten! Unsere Partner verwenden Cookies Ihres Browsers, um quer durch das Web zu verstehen, was Sie interessiert und Ihnen entsprechend relevante Inhalte und Werbung anzubieten.',
			moreChoices: 'Weitere Auswahlmöglichkeiten'
		},
		footer: {
			message: 'Du kannst deine Datenschutz-Einstellungen bearbeiten',
			consentLink: 'hier'
		}
            },
            fr: {
				intro: {
					title: 'Merci de votre visite',
					description: 'Afin de faire fonctionner ce site Web avec succès, nos partenaires et nous-mêmes utilisons des cookies (petits fichiers texte) dans le navigateur Web pour comprendre ce que nos visiteurs sont intéressés à proposer du contenu et de la publicité pertinents. À l’avenir, nous avons également besoin du consentement de nos utilisateurs.',
					acceptAll: 'Accepter tous les cookies',
					rejectAll: 'Refuser tous les cookies',
					showPurposes: 'Afficher les utilisations'
				},
				details: {
					title: 'Préférences de confidentialité des utilisateurs',
					back: 'Retour',
					save: 'Acceter et continuer sur le site'
				},
				purposes: {
					active: 'Actif',
					inactive: 'inactif',
					showVendors: 'Afficher les vendeurs',
					cookies: {
						menu: 'Comment utilisons-nous les cookies',
						title: 'Ce site utilise des cookies',
						description: 'Nos partenaires et nous installons des cookies (petits fichiers de texte) et collectons des informations lorsque vous naviguez sur le Web dans ce navigateur. Il s’agit de comprendre ce qui intéresse nos visiteurs et d’offrir un contenu et des publicités pertinents.'
					},
					purpose1: {
						menu: 'Stockage d\'informations et accès',
						title: 'Stockage d\'informations et accès',
						description: 'Autoriser le stockage d’informations ou l’accès à des informations déjà stockées sur votre appareil, telles que des identifiants publicitaires, des identifiants de dispositif, des cookies et des technologies similaires.'
					},
					purpose2: {
						menu: 'Personnalisation',
						title: 'Personnalisation',
						description: 'Autoriser la collecte et le traitement d’informations sur votre utilisation de ce service pour ensuite personnaliser la publicité et/ou le contenu qui vous sont proposés dans d’autres contextes, tels que sur d’autres sites ou applications, au fil du temps. En règle générale, le contenu du site ou de l’application est utilisé pour déterminer vos centres d’intérêt et permettent de déterminer le choix de la publicité et/ou du contenu.'
					},
					purpose3: {
						menu: 'Sélection d\'annonces, diffusion, rapport',
						title: 'Sélection d\'annonces, diffusion, rapport',
						description: 'Autoriser le traitement des données d\'un utilisateur pour fournir du contenu ou des publicités et mesurer la diffusion de ces contenus ou publicités, extraire des informations et générer des rapports pour comprendre l\'utilisation des services; et / ou accéder ou stocker des informations sur des dispositifs à cette fin. Inclura les caractéristiques suivantes:'
					},
					purpose4: {
						menu: 'Sélection de contenu, diffusion, rapport',
						title: 'Sélection de contenu, diffusion, rapport',
						description: 'Autoriser le traitement des données d\'un utilisateur pour la création de contenu personnalisé (y compris la diffusion, l\'analyse et la création de rapports) en fonction des préférences ou des intérêts d\'un utilisateur connus ou inférer à partir de données collectées sur plusieurs sites, applications ou appareils; et / ou accéder ou stocker des informations sur des dispositifs à cette fin. Inclura les caractéristiques suivantes:'
					},
					purpose5: {
						menu: 'Mesures',
						title: 'Mesures',
						description: 'Autoriser la collecte d’informations sur votre utilisation du contenu et la combinaison avec des informations précédemment collectées, utilisées pour mesurer, comprendre et rendre compte de votre utilisation du service. Cela n’inclut pas la personnalisation, la collecte d’informations sur votre utilisation de ce service pour personnaliser ultérieurement le contenu et/ou la publicité dans d’autres contextes, par exemple sur d’autres services, tels que des sites ou des applications.'
					}
				},
						vendors: {
					title: 'Nos partenaires',
					rejectAll: 'Tous rejettent',
					acceptAll: 'Accepter tout',
					company: 'Société',
					offOn: 'Off / On',
					description: 'Aidez-nous à vous fournir une meilleure expérience en ligne! Nos partenaires utilisent des cookies et collectent des informations à partir de votre navigateur sur le Web pour vous fournir du contenu, diffuser des publicités pertinentes et analyser les audiences Web.',
					moreChoices: 'Autres options'
				},
				footer: {
					message: 'Vous pouvez modifier vos paramètres de confidentialité',
					consentLink: 'ici'
				}
            }
        }       
    }
};
snhb.console.debug("Global settings loaded.");

