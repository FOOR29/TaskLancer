
import { Prisma } from '@/generated/prisma/browser';
import { PrismaClient } from '@/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg'
import 'dotenv/config'

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
})

const prisma = new PrismaClient({
    adapter,
});

const userData: Prisma.UserCreateInput[] = [
    {
        name: "Alice Johnson",
        email: "alice@tasklancer.io",
        password: "hashed_password_1", // In production, use proper password hashing
        role: "FREELANCER",
        clients: {
            create: [
                {
                    name: "Acme Corporation",
                    email: "contact@acme.com",
                    phone: "+1-555-0100",
                    company: "Acme Corp",
                    role: "CTO",
                },
                {
                    name: "Tech Startup Inc",
                    email: "hello@techstartup.com",
                    phone: "+1-555-0200",
                    company: "Tech Startup Inc",
                },
            ],
        },
        projects: {
            create: [
                {
                    name: "Website Redesign",
                    description: "Complete website overhaul with modern design",
                    color: "#3B82F6",
                    status: "ACTIVE",
                },
                {
                    name: "Mobile App Development",
                    description: "iOS and Android app development",
                    color: "#10B981",
                    status: "ACTIVE",
                },
            ],
        },
    },
    {
        name: "Bob Smith",
        email: "bob@tasklancer.io",
        password: "hashed_password_2", // In production, use proper password hashing
        role: "FREELANCER",
        clients: {
            create: [
                {
                    name: "Global Enterprises",
                    email: "dev@globalent.com",
                    phone: "+1-555-0300",
                    company: "Global Enterprises LLC",
                    role: "Product Manager",
                },
            ],
        },
        projects: {
            create: [
                {
                    name: "API Development",
                    description: "RESTful API for e-commerce platform",
                    color: "#8B5CF6",
                    status: "ACTIVE",
                },
            ],
        },
    },
];

export async function main() {
    console.log('🌱 Starting database seed...');

    for (const u of userData) {
        const user = await prisma.user.upsert({
            where: { email: u.email },
            update: {
                name: u.name,
                password: u.password,
                role: u.role,
            },
            create: u,
        });
        console.log(`✓ User created/updated: ${user.email}`);
    }

    console.log('✅ Database seed completed successfully!');
}

main()
    .catch((e) => {
        console.error('❌ Error seeding database:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });