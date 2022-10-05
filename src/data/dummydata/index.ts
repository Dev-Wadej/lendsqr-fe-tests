
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
import {ReactComponent as FeesAndPricing} from '../svgs/fees&pricing..svg'
import {ReactComponent as AuditLogs} from '../svgs/auditlogs.svg'
//================================================================================================//


export const settings={
    title: 'Settings',
    links: [
        {
            icons: Preferences,
            name: 'preferences'
    
        },
        {
            icons: FeesAndPricing,
            name: 'fees and pricing'
    
        },
        {
            icons: AuditLogs,
            name: 'audit logs'
    
        },
    ]
}
export const businesses={
    title:'businesses',
    links:[
        {
            icons: Organization,
            name: 'organization'
    
        },
        {
            icons: LoanProducts,
            name: 'loan products'
    
        },
        {
            icons: SavingsProduct,
            name: 'Savings Products'
    
        },
        {
            icons: FeesAndCharge,
            name: 'fees and Charges'
    
        },
        {
            icons: Transactions,
            name: 'transactions'
    
        },
        {
            icons: Services,
            name: 'services'
    
        },
        {
            icons: ServiceAccount,
            name: 'service account'
    
        },
        {
            icons: Settlements,
            name: 'settlements'
    
        },
        {
            icons: Reports,
            name: 'reports'
    
        }
    ]
}



export const customers = {
title: 'customers',
links:[
    {
        icons: Users,
        name: 'users'

    },
    {
        icons: Guarantors,
        name: 'guarantors'

    },
    {
        icons: Loans,
        name: 'loans'

    },
    {
        icons: DecisionModels,
        name: 'decision models'

    },
    {
        icons: Savings,
        name: 'savings'

    },
    {
        icons: LoanRequest,
        name: 'loan request'

    },
    {
        icons: Whitelist,
        name: 'whitelist'

    },
    {
        icons: Karma,
        name: 'karma'

    }
]
}