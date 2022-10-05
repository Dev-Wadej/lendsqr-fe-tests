
//==============================Imports for sidebar 'Customers'======================================//
import {ReactComponent as Users} from '../svgs/userfriends.svg'
import {ReactComponent as Guarantors} from '../svgs/guarantors.svg'
import {ReactComponent as Loans} from '../svgs/loans.svg'
import {ReactComponent as DecisionModels} from '../svgs/decisionmodels.svg'
import {ReactComponent as Savings} from '../svgs/savings.svg'
import {ReactComponent as LoanRequest} from '../svgs/loanrequest.svg'
import {ReactComponent as Whitelist} from '../svgs/whitelist.svg'
import {ReactComponent as Karma} from '../svgs/karma.svg'
//================================================================================================//

//==============================Imports for sidebar 'Businesses'======================================//
import {ReactComponent as Organization} from '../svgs/briefcase.svg'
import {ReactComponent as LoanProducts} from '../svgs/loanrequest.svg'
import {ReactComponent as SavingsProduct} from '../svgs/savingsproduct.svg'
import {ReactComponent as FeesAndCharge} from '../svgs/fees&charges.svg'
import {ReactComponent as Transactions} from '../svgs/transactions.svg'
import {ReactComponent as Services} from '../svgs/services.svg'
import {ReactComponent as ServiceAccount} from '../svgs/servicesaccount.svg'
import {ReactComponent as Settlements} from '../svgs/settlements.svg'
import {ReactComponent as Reports} from '../svgs/reports.svg'
//================================================================================================//

//==============================Imports for sidebar 'settings'======================================//
import {ReactComponent as Preferences} from '../svgs/preferences.svg'
import {ReactComponent as FeesAndPricing} from '../svgs/fees&pricing.svg'
import {ReactComponent as AuditLogs} from '../svgs/auditlogs.svg'
//================================================================================================//


export const settings={
    title: 'Settings',
    links: [
        {
            icons: Preferences,
            name: 'Preferences'
    
        },
        {
            icons: FeesAndPricing,
            name: 'Fees And Pricing'
    
        },
        {
            icons: AuditLogs,
            name: 'Audit Logs'
    
        },
    ]
}
export const businesses={
    title:'Businesses',
    links:[
        {
            icons: Organization,
            name: 'Organization'
    
        },
        {
            icons: LoanProducts,
            name: 'Loan Products'
    
        },
        {
            icons: SavingsProduct,
            name: 'Savings Products'
    
        },
        {
            icons: FeesAndCharge,
            name: 'Fees And Charges'
    
        },
        {
            icons: Transactions,
            name: 'Transactions'
    
        },
        {
            icons: Services,
            name: 'Services'
    
        },
        {
            icons: ServiceAccount,
            name: 'Service Account'
    
        },
        {
            icons: Settlements,
            name: 'Settlements'
    
        },
        {
            icons: Reports,
            name: 'Reports'
    
        }
    ]
}



export const customers = {
title: 'customers',
links:[
    {   id:'active',
        icons: Users,
        name: 'Users',

    },
    {
        icons: Guarantors,
        name: 'Guarantors'

    },
    {
        icons: Loans,
        name: 'Loans'

    },
    {
        icons: DecisionModels,
        name: 'Decision Models'

    },
    {
        icons: Savings,
        name: 'Savings'

    },
    {
        icons: LoanRequest,
        name: 'Loan Request'

    },
    {
        icons: Whitelist,
        name: 'Whitelist'

    },
    {
        icons: Karma,
        name: 'Karma'

    }
]
}