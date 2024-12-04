export class Menu {
  public static routerlink = {
    admin: [
      { label: 'Dashboard', path: 'dashboard', icon: 'dashboard' },
      {
        label: 'Merchant Management',
        path: 'all-vpa',
        icon: 'setting',
      },
      // {
      //   path: 'approve-request',
      //   label: 'Approve Request',
      //   icon: 'check-circle',
      // },
      {
        label: 'QR Management',
        path: 'qr-management',
        icon: 'qrcode',
        // children: [
        //   {
        //     path: 'qr-management',
        //     label: 'QR Details',
        //     icon: 'info-circle',
        //   },

        // ],
      },

      {
        label: 'Inventory Management  ',
        icon: 'account-book',
        path: 'soundbox',

      },

      {
        label: 'Help Center',
        path: 'manage-ticket',
        icon: 'book',
        // children: [
        //   {
        //     path: 'FAQs',
        //     label: 'FAQs',
        //     icon: 'file-text',
        //   },
        //   {
        //     path: 'manage-ticket',
        //     label: 'Ticket Mangement',
        //     icon: 'info-circle',
        //   },
        // ],
      },
    ],

    maker: [
      { label: 'Dashboard', path: 'payout', icon: 'dashboard' },
      { label: 'Registration', path: 'registration-form', icon: 'form' },
      {
        label: 'Insights',
        type: 'submenu',
        icon: 'area-chart',
        children: [
          {
            label: 'Transactions',
            type: 'submenu',
            icon: 'pic-right',
            children: [
              {
                path: 'transaction-list',
                label: 'Transaction List',
                icon: 'pic-right',
                tag: false,
              },
              {
                path: 'npci-data',
                label: 'Not In Switch',
                icon: 'pic-right',
                tag: false,
              },
              {
                path: 'switch-data',
                label: 'Not In NPCI',
                icon: 'pic-right',
                tag: false,
              },
            ],
          },
          {
            path: 'insights/qr-transaction',
            label: 'QR Transctions',
            icon: 'qrcode',
          },
          {
            path: 'insights/callback-transaction',
            label: 'Collect Transctions',
            icon: 'pic-right',
          },
          {
            path: 'sid-status',
            label: 'Submerchant Status',
            icon: 'pic-right',
          },
        ],
      },
      {
        label: 'Upload Sub-Merchant',
        path: 'submerchant-uploadfile',
        icon: 'cloud-upload',
      },

      {
        label: 'Technical Documents',
        type: 'submenu',
        icon: 'sliders',
        children: [
          {
            label: 'Integration API',
            icon: '',
            type: 'submenu',
            children: [
              {
                path: 'api-integration/security',
                label: 'Securty-Common to All APIs',
                icon: 'cloud-upload',
                tag: true,
              },
              {
                path: 'api-integration/verify-vpa',
                label: 'Verify API',
                icon: 'pic-right',
                tag: true,
              },
              {
                path: 'api-integration/raise-collect-by-payee',
                label: 'Raise Collect by Payee/Merchant',
                icon: 'pic-right',
                tag: true,
              },
              {
                path: 'api-integration/transaction-status',
                label: 'Transction Status',
                icon: 'pic-right',
                tag: true,
              },
              {
                path: 'api-integration/transaction-report',
                label: 'Transction Report',
                icon: 'pic-right',
                tag: true,
              },
              {
                path: 'api-integration/transaction-callback',
                label: 'Transction Callback',
                icon: 'pic-right',
                tag: true,
              },
              {
                path: 'api-integration/generate-qr',
                label: 'Genrerate QR',
                icon: 'pic-right',
                tag: true,
              },
              {
                path: 'api-integration/qr-transaction-by-rrn',
                label: 'QR Transction Status by RRN',
                icon: 'pic-right',
                tag: true,
              },
              {
                path: 'api-integration/qr-transaction-by-extnid',
                label: 'QR Transction Status by Ext. ID',
                icon: 'pic-right',
                tag: true,
              },
              {
                path: 'api-integration/qr-report',
                label: 'QR Report',
                icon: 'pic-right',
                tag: true,
              },
              {
                path: 'api-integration/qr-callback',
                label: 'QR Callback',
                icon: 'pic-right',
                tag: true,
              },
            ],
          },
          {
            label: 'Download API Document',
            icon: 'download',
            path: 'download-file',
          },
        ],
      },
      {
        label: 'Policy Documents',
        type: 'submenu',
        icon: 'book',
        children: [
          {
            path: 'term-condition',
            label: 'Terms & Conditions',
            icon: 'file-text',
          },
          {
            path: 'privacy-policy',
            label: 'Privacy Policy',
            icon: 'file-text',
          },
        ],
      },
      {
        path: 'profile',
        label: 'Profile',
        icon: 'profile',
      },
      { label: 'Contact', path: 'contact-us', icon: 'contacts' },
    ],

    checker: [
      { label: 'Dashboard', path: 'payin', icon: 'dashboard' },
      {
        label: 'Admin',
        type: 'submenu',
        icon: 'user',
        children: [
          {
            path: 'admin-uploadfile',
            label: 'upload-Files',
            icon: 'cloud-upload',
          },
          {
            label: 'Transaction List',
            type: 'submenu',
            icon: 'pic-right',
            children: [
              {
                path: 'transaction-list',
                label: 'Two Way Recon',
                icon: 'pic-right',
              },
              {
                path: 'three-way-recon',
                label: 'Three Way Recon',
                icon: 'pic-right',
              },

              {
                path: 'npci-data',
                label: 'Not In Switch',
                icon: 'pic-right',
                tag: false,
              },
              {
                path: 'switch-data',
                label: 'Not In NPCI',
                icon: 'pic-right',
                tag: false,
              },
            ],
          },
          {
            path: 'validate-merchant',
            label: 'Validate Merchant',
            icon: 'credit-card',
          },
          {
            path: 'chargeback',
            label: 'Chargeback',
            icon: 'cloud-upload',
          },
          {
            label: 'Merchant Mgmt',
            type: 'submenu',
            icon: 'user',
            children: [
              {
                path: 'merchant-list',
                label: 'Merchants',
                icon: 'usergroup-add',
                tag: false,
              },
              {
                path: 'mid-creation',
                label: 'Merchant ID Creation',
                icon: 'search',
                tag: false,
              },
              {
                path: 'sid-creation',
                label: 'Sub-Merchant Activation',
                icon: 'search',
              },
            ],
          },
        ],
      },
      {
        label: 'Insights',
        type: 'submenu',
        icon: 'area-chart',
        children: [
          {
            label: 'Transactions',
            type: 'submenu',
            icon: 'pic-right',
            children: [
              {
                path: 'transaction-list',
                label: 'Transaction List',
                icon: 'pic-right',
                tag: false,
              },
              {
                path: 'npci-data',
                label: 'Not In Switch',
                icon: 'pic-right',
                tag: false,
              },
              {
                path: 'switch-data',
                label: 'Not In NPCI',
                icon: 'pic-right',
                tag: false,
              },
            ],
          },
          {
            path: 'insights/qr-transaction',
            label: 'QR Transctions',
            icon: 'qrcode',
          },
          {
            path: 'insights/callback-transaction',
            label: 'Collect Transctions',
            icon: 'pic-right',
          },
        ],
      },

      {
        label: 'Technical Document',
        type: 'submenu',
        icon: 'sliders',
        children: [
          {
            label: 'Integration API',
            icon: '',
            type: 'submenu',
            children: [
              {
                path: 'api-integration/security',
                label: 'Securty-Common to All APIs',
                icon: 'cloud-upload',
                tag: true,
              },
              {
                path: 'api-integration/verify-vpa',
                label: 'Verify API',
                icon: 'pic-right',
                tag: true,
              },
              {
                path: 'api-integration/raise-collect-by-payee',
                label: 'Raise Collect by Payee/Merchant',
                icon: 'pic-right',
                tag: true,
              },
              {
                path: 'api-integration/transaction-status',
                label: 'Transction Status',
                icon: 'pic-right',
                tag: true,
              },
              {
                path: 'api-integration/transaction-report',
                label: 'Transction Report',
                icon: 'pic-right',
                tag: true,
              },
              {
                path: 'api-integration/transaction-callback',
                label: 'Transction Callback',
                icon: 'pic-right',
                tag: true,
              },
              {
                path: 'api-integration/generate-qr',
                label: 'Genrerate QR',
                icon: 'pic-right',
                tag: true,
              },
              {
                path: 'api-integration/qr-transaction-by-rrn',
                label: 'QR Transction Status by RRN',
                icon: 'pic-right',
                tag: true,
              },
              {
                path: 'api-integration/qr-transaction-by-extnid',
                label: 'QR Transction Status by Ext. ID',
                icon: 'pic-right',
                tag: true,
              },
              {
                path: 'api-integration/qr-report',
                label: 'QR Report',
                icon: 'pic-right',
                tag: true,
              },
              {
                path: 'api-integration/qr-callback',
                label: 'QR Callback',
                icon: 'pic-right',
                tag: true,
              },
            ],
          },
          {
            label: 'Download API Document',
            icon: 'download',
            path: 'download-file',
          },
        ],
      },
      {
        path: 'profile',
        label: 'Profile',
        icon: 'profile',
      },
    ],
  };
}
