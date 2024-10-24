export const deAppTranslations = {
  logoSwissGeol: 'Logo Swissgeol Assets',
  welcomeTo: 'Willkommen bei',
  accessForbidden: 'Sie haben keinen Zugriff auf diese Applikation.',
  resourceForbidden: 'Sie haben keinen Zugriff auf diese Ressource.',
  ok: 'OK',
  submit: 'Absenden',
  cancel: 'Abbrechen',
  confirm: 'Bestätigen',
  confirmDelete: 'Sind Sie sicher, dass Sie dieses Asset löschen wollen?',
  deleteSuccess: 'Das Asset wurde erfolgreich gelöscht.',
  login: 'Anmelden',
  logout: 'Abmelden',
  yes: 'Ja',
  no: 'Nein',
  add: 'Hinzufügen',
  save: 'Speichern',
  required: 'Erforderlich',
  labelEdit: 'Bearbeiten',
  delete: 'Löschen',
  close: 'Schliessen',
  datePlaceholder: 'JJJJ-MM-TT',
  workgroup: {
    title: 'Arbeitsgruppe',
    errors: {
      nameTaken: "Der Name '{{name}}' wird bereits von einer anderen Arbeitsgruppe verwendet.",
    },
  },
  menuBar: {
    filters: 'Filter',
    admin: 'Verwaltung',
    favourites: 'Favoriten',
    help: 'Hilfe',
    profile: 'Profil',
    settings: 'Einstellungen',
    signOut: 'Schliessen',
    createAsset: 'Neues Asset',
  },
  map: {
    zoomIn: 'Hineinzoomen',
    zoomOut: 'Herauszoomen',
    zoomToOrigin: 'Zur Ursprungsposition zoomen',
    drawingModeOn: 'Der Zeichenmodus ist ausgeschaltet. Klicken Sie, um den Zeichenmodus einzuschalten',
    drawingModeOff: 'Der Zeichenmodus ist eingeschaltet. Klicken Sie, um den Zeichenmodus auszuschalten',
    dragHandleLabel: 'Ziehgriff',
  },
  search: {
    textSearchFieldPlaceholder: 'Suche nach...',
    searchInstructionsHeading: 'Asset-Suche',
    searchInstructions:
      'Suchen Sie nach einem Asset über das Suchfeld oder durch Zeichnen eines Polygons auf der Karte.',
    closeInstructions: 'Anleitung schliessen',
    searchControl: 'Suchsteuerung',
    refineSearch: 'Suche verfeinern',
    searchResults: 'Assets',
    author: 'Autor',
    documentDate: 'Dokumentdatum',
    usage: 'Nutzung',
    detailedInformation: 'Detailinformationen',
    originalTitle: 'Originaltitel',
    kind: 'Art',
    topic: 'Thema',
    format: 'Format',
    createdDate: 'Erstellungsdatum',
    lastProcessedDate: 'Letztes Update',
    alternativeId: 'Alternativ-ID',
    contacts: 'Kontakte',
    subject: 'Thema',
    content: 'Inhalt',
    nationalInterest: 'Nat. Interesse',
    reference: 'Verweis',
    status: 'Status',
    closeAssetDetails: 'Assetdetails schliessen',
    usageCode: {
      public: 'Öffentliche Nutzung',
      internal: 'Interne Nutzung',
      useOnRequest: 'Nutzung auf Anfrage',
    },
    geometry: 'Geometrie',
    geometryCode: {
      Point: 'Punkt',
      LineString: 'Linie',
      Polygon: 'Polygon',
      None: 'Keine',
    },
    language: 'Sprache',
    languageItem: {
      None: 'keine',
    },
    workgroup: 'Arbeitsgruppe',
    resetSearch: 'Suche zurücksetzen',
    file: 'Datei',
    legalFile: 'Rechtliche Einwilligungen',
    openFileInNewTab: '{{fileName}} in neuem Tab öffnen',
    downloadFile: '{{fileName}} herunterladen',
    assetsUnderMouseCursor: '{{ assetsCount }} Assets unter dem Mauszeiger gefunden. Bitte wählen Sie eines aus:',
    removePolygon: 'Polygon aufheben',
    drawPolygon: 'Polygon zeichnen',
    hideTable: 'Tabelle verbergen',
    showTable: 'Tabelle anzeigen',
  },
  contactRoles: {
    author: 'Autor',
    initiator: 'Auftraggeber',
    supplier: 'Einlieferer',
  },
  edit: {
    tabs: {
      general: {
        tabName: 'Allgemein',
        kind: 'Typ',
        language: 'Sprache',
        format: 'Format',
        topic: 'Thema',
        topics: 'Themen',
        title: 'Titel',
        publicTitle: 'Öffentlicher Titel',
        originalTitle: 'Originaltitel',
        sgsId: 'SGS-ID',
        date: 'Datum',
        creationDate: 'Erstellungsdatum',
        dateReceived: 'Eingangsdatum',
        type: 'Typ',
        alternativeId: 'Alternativ-ID',
        alternativeIdDescription: 'Beschreibung Alternativ-ID',
        addNewAlternativeId: 'Neue Alternativ-ID hinzufügen',
      },
      files: {
        tabName: 'Dateien',
        Normal: {
          one: 'Normale Datei',
          many: 'Normale Dateien',
        },
        Legal: {
          one: 'Rechtliche Einwilligung',
          many: 'Rechtliche Einwilligungen',
        },
        legalDocItemCode: 'Typ',
        or: 'oder',
        dragFileHere: 'Datei hierher ziehen',
        selectFile: 'Datei auswählen',
        addNewFile: 'Neue Datei hinzufügen',
        willBeDeleted: 'Wird gelöscht werden',
        willBeUploaded: 'Wird hochgeladen werden',
        fileSizeToLarge: 'Die Dateigrösse darf 250 MB nicht überschreiten.',
      },
      usage: {
        tabName: 'Nutzung',
        internalUsageReason: 'Interne Nutzung wird eingeschaltet, weil Externe Nutzung eingeschaltet wurde.',
        internalUsage: 'Interne Nutzung',
        externalUsage: 'Externe Nutzung',
        status: 'Status',
        expirationDate: 'Ablaufdatum',
        nationalInterest: 'Nationales Interesse',
        typeNationalInterest: 'Typ Nationales Interesse',
        type: 'Typ',
        types: 'Typen',
        noTypesAssigned: 'Keine Typen zugewiesen',
        questionDeleteNationalInterest: 'Möchten Sie fortfahren und die Einträge löschen?',
        validationErrors: {
          internalPublicUsageDateError:
            'Das interne Ablaufdatum muss näher oder gleich liegen als das der externen Nutzung',
        },
      },
      contacts: {
        tabName: 'Kontakte',
        linkContact: 'Neuen Kontakt-Link hinzufügen',
        link: 'Verlinken',
        createNewContact: 'Neuen Kontakt erstellen',
        editContact: 'Konktakt bearbeiten',
        unlink: 'Verlinkung aufheben',
        viewDetails: 'Konktaktdetails anzeigen',
        contact: 'Kontakt',
        role: 'Rolle',
        newContact: 'Neuer Kontakt',
        contactKind: 'Kontaktart',
        name: 'Name',
        street: 'Strasse',
        number: 'Nummer',
        postCode: 'PLZ',
        locality: 'Ort',
        country: 'Land',
        email: 'E-Mail',
        phone: 'Telefon',
        website: 'Website',
        create: 'Erstellen',
        noContacts: 'Keine Kontakte',
        contactPlaceholder: 'Suche über Namen',
      },
      references: {
        tabName: 'Verweise',
        assetTitlePublic: 'Öffentlicher Titel',
        assetTitlePublicPlaceholder: 'Suche über den öffentlichen Titel',
        referenceHeadings: {
          parent: 'Übergeordneter Asset',
          subordinate: 'Untergeordnete Assets',
          sibling: 'Geschwister Assets',
          newReference: 'Neuer Verweis',
        },
        referenceType: {
          parent: 'Übergeordnet',
          subordinate: 'Untergeordnet',
          sibling: 'Geschwister',
        },
      },
      geometries: {
        tabName: 'Geometrien',
        geometry: 'Geometrie',
        noGeometries: 'Keine Geometrien',
        geometryType: 'Geometrietyp',
        selectGeometryLabel: 'Wählen Sie aus {{count}} Geometrien',
        geometryLineString: 'Linie',
        geometryPolygon: 'Polygon',
        geometryPoint: 'Punkt',
        geometryMenu: {
          buttonLabel: 'Menü für Geometrie',
          new: 'Neue Geometrie erfassen',
          remove: 'Geometrie löschen',
        },
        vertexMenu: {
          buttonLabel: 'Menü für Eckpunkt {{index}}',
          add: 'Eckpunkt hinzufügen nach',
          remove: 'Eckpunkt löschen',
        },
        instructionsPoint: 'Passen Sie die Koordinaten des neuen Punktes an',
        instructionsPolygonOrLIne: 'Zeichnen Sie mindestens {{ count }} Punkte',
        instructionsMorePolygonOrLIne: 'Zeichnen Sie mindestens {{ count }} weitere Punkte',
        createGeometry: 'Geometrie erstellen',
      },
      administration: {
        tabName: 'Administration',
        infoGeol: 'InfoGeol',
        sgsId: 'SGS-ID',
        data: 'Daten',
        contactData: 'Kontaktdaten',
        auxData: 'Zusatzdaten',
        municipality: 'Gemeinde',
        workStatus: 'Arbeitsstatus',
        lastProcessed: 'Letztes Update',
        by: 'Von',
        addWorkStatus: 'Hinzufügen Arbeitsstatus',
        tabValidationErrors: {
          tab: 'Tab',
          hasValidationErrors: 'enthält Validierungsfehler',
        },
      },
    },
    closeManageAsset: 'Asset verwalten schliessen',
    questionDiscardChanges: 'Möchten Sie die Änderungen verwerfen?',
    userManagementHeading: 'Benutzer',
    userManagementButton: 'Benutzer verwalten',
    adminInstructionsSyncElasticAssetsHeading: 'Assets mit Elasticsearch synchronisieren',
    adminInstructionsSyncElasticAssets:
      'Gleicht den Zustand von Elasticsearch mit der Datenbank ab.' +
      ' Damit wird sichergestellt, dass die Suche alle vorhandenen Assets miteinbezieht.',
    adminInstructionsSyncElasticAssetsStart: 'Synchronisation starten',
  },
  admin: {
    users: 'Benutzer',
    workgroups: 'Arbeitsgruppen',
    name: 'Name',
    role: 'Rolle',
    actions: 'Aktionen',
    email: 'E-Mail',
    back: 'Zurück',
    languages: {
      de: 'Deutsch',
      en: 'Englisch',
      fr: 'Französisch',
      it: 'Italienisch',
      rm: 'Rätoromanisch',
    },
    userPage: {
      admin: 'Admin',
      lang: 'Sprache',
      addWorkgroups: 'Arbeitsgruppen hinzufügen',
      more: 'weitere',
      userAddError: 'Füge mindestens einen Benutzer hinzu',
    },
    workgroupPage: {
      name: 'Name',
      isActive: 'Aktiv',
      activate: 'Aktivieren',
      deactivate: 'Deaktivieren',
      create: 'Erstellen',
      isDisabled: 'Deaktiviert',
      chooseUsersText: 'Füge Benutzer hinzu, um sie zu verwalten',
      addUsers: 'Benutzer hinzufügen',
    },
  },
};
